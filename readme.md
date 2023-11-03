# Node.js MySQL to MongoDB Data Transfer

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Running the Script](#running-the-script)
- [Built With](#built-with)
- [License](#license)

## Introduction

This Node.js script is designed to transfer data from a MySQL database to a MongoDB database. It allows you to configure the database connections and select specific columns to transfer. The script is useful for migrating data from MySQL to MongoDB or for maintaining synchronized data between the two databases which will automatically Zinc data in every 10 mints by default.

## Getting Started

Follow these instructions to set up and run the script on your local machine.

### Prerequisites

1. **Node.js and npm**: Make sure you have Node.js and npm installed on your machine. If not, you can download and install them from [Node.js official website](https://nodejs.org/).

2. **Access to MySQL and MongoDB**: You'll need access to a MySQL database from which you want to transfer data and a MongoDB database where you want to store the transferred data.

### Installation

1. **Clone the Repository**:

   ```bash
   git clonehttps://github.com/nandhuz-coder/Mysql-to-mongodb
   cd Mysql-to-mongodb
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

## Configuration

Edit the `config.json` file in the project directory to configure your database connections and column mapping settings. The configuration file should look something like this:

```json
{
  "database": {
    "host": "your_mysql_host",
    "user": "your_mysql_user",
    "databaseName": "your_mysql_database_name",
    "collection": "your_mongodb_collection_name",
    "mongodb": "mongodb://your_mongodb_host:your_mongodb_port/your_mongodb_database"
    // add password if Sql database have password
    //"password": "your_mysql_password",
  },
  "mysqlQueryColumns": [
    {
      "name": "identifier",
      "type": "String"
    },
    //dont change identifier
    {
      "name": "accounts",
      "type": "String"
    },
    {
      "name": "`group`",
      "type": "String"
    }
  ],
  "fetch_time": 600000,
  "table_name": "tablename"
}
```
    // give ` for keyword as a column name
    // Add more columns as needed

## Running the Script

To run the script, follow these steps:

1. **Navigate to Your Project Directory**:

   Open your terminal and navigate to the directory where your Node.js script is located. Use the `cd` command to change directories.

   ```bash
   cd /path/to/your/project
   ```

2. **Run the Script**:

   Once you are in the project directory, you can run the script using the following command, Before that make sure that dependences are downloaded:

   ```bash
   npm start
   ```

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [mysql2](https://www.npmjs.com/package/mysql2) - MySQL client for Node.js
- [mongoose](https://mongoosejs.com/) - MongoDB object modeling tool

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
