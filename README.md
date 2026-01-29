# MariaDB + Node.js Web App Demo

This project demonstrates how a Node.js + Express web application
connects to a MariaDB database on a shared Linux server.

MariaDB is already installed and running.
Your database account has already been created for you.

---

## Your Database Credentials

Each student has their own database and MariaDB user.

- Database username: your Linux username
- Database password: your student ID
- Database name: db_\<username\>

Example:
- Linux username: jdoe
- Database name: db_jdoe

You do not need to create databases or users.

---

## Connecting to MariaDB (for testing)

From the Linux shell:

mariadb -u <your_username> -p db_<your_username>

When prompted, enter your student ID as the password.

---

## Initialize the Database Schema

Run this once to create the tables in your database:

mariadb -u <your_username> -p db_<your_username> < schema.sql

---

## Install Dependencies

From the project directory:

npm install

---

## Running the Web App

Each student must run their server on a unique port.

### Port rule
Use port 41xx, where xx is the last two digits of your student ID.

Examples:
- Student ID 12345678 → port 4178
- Student ID 90001234 → port 4134

### Run the server

make run PORT=41xx

Example:

make run PORT=4178

---

## Access the App

Open a browser and visit:

http://localhost:41xx

Example:

http://localhost:4178

---

## Important Rules

- Do not change server.js to hard-code a port
- Always use make run PORT=41xx
- If the server fails to start, check:
  - correct port number
  - correct database name
  - correct database password

---

## What This App Demonstrates

- Connecting Node.js to MariaDB
- Executing SQL queries from JavaScript
- Using a shared database server safely
- Separating configuration (ports, credentials) from code

