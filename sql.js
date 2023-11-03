const mongoose = require("mongoose");
const mysql = require("mysql2");
const config = require("./config/config");

const mysqlConnection = mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  database: config.database.databaseName,
});
db();
const schemaFields = config.mysqlQueryColumns.reduce((acc, field) => {
  acc[field.name] = field.type;
  return acc;
}, {});

const Player = mongoose.model(
  config.database.collection,
  new mongoose.Schema(schemaFields)
);

const updateMongo = async () => {
  try {
    if (mongoose.connection.readyState !== 1) {
      console.log("MongoDB connection is not open. Trying to connect...");
      await mongoose.connect(config.database.mongodb);
      console.log("Connected to MongoDB");
    }
    const columns = config.mysqlQueryColumns
      .map((field) => field.name)
      .join(", ");
    mysqlConnection.query(
      `SELECT ${columns} FROM ${config.table_name}`,
      (err, results) => {
        if (err) {
          console.error(`MySQL query error: ${err}`);
          return;
        }
        results.forEach(async (row) => {
          try {
            let updateData = {};
            config.mysqlQueryColumns.forEach((field) => {
              updateData[field.name] = row[field.name];
            });
            await Player.findOneAndUpdate(
              { identifier: row.identifier },
              updateData,
              { upsert: true }
            );
          } catch (err) {
            console.error(`Failed to update MongoDB: ${err}`);
          }
        });
        console.log("Data updated to MongoDB");
      }
    );
  } catch (err) {
    console.error("Failed to update MongoDB:", err);
  }
};

function db() {
  mongoose
    .connect(config.database.mongodb)
    .then(() => {
      console.log("Connected to MongoDB");
      updateMongo();
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
}

setInterval(() => {
  console.log("Updating MongoDB...");
  if (mongoose.connection.readyState !== 1) {
    db();
  } else {
    updateMongo();
  }
}, config.fetch_time || 10 * 1000 * 60);
