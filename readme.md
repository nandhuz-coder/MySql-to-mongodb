# Node.js MySQL to MongoDB Data Transfer

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
  - [Note](#note)
- [Running the Script](#running-the-script)
- [Built With](#built-with)
- [Security](#security)
  - [Contact](#contact)
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
   git clone https://github.com/nandhuz-coder/MySql-to-mongodb
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
  },
  "mysqlQueryColumns": [
    {
      "name": "identifier",
      "type": "String"
    },
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

### Note

1. Add password; If Sql database have password. ` "password": "your_mysql_password",`.
2. Enclose in `` ` `` for keyword as column name.
3. Add more columns as needed.
4. If identifier name is changed. change it also from [sql.js](sql.js).

## Running the Script

To run the script, follow these steps:

1. **Navigate to Your Project Directory**:

   Open your terminal and navigate to the directory where your Node.js script is located. Use the `cd` command to change directories.

   ```bash
   cd /path/to/MySql-to-mongodb
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

## Security

For detailed security information, including how to report security issues and security best practices, please refer to our [Security Policy](SECURITY.md).

### Contact

For any security-related questions or concerns, please reach out to our security team at [dev.nandhagopan@gmail.com](mailto:dev.nandhagopan@gmail.com).

## License

This project is licensed under the MIT License - see the [LICENSE.md](license.md) file for details.
