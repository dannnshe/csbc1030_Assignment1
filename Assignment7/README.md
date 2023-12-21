# Node.js Application with MySQL Database Integration

## Overview

This application is an enhancement of the previous assignment (Assignment 6), now incorporating a MySQL database for user data management. This change simplifies the codebase and allows for better scalability.

## Prerequisites

- Node.js installed on your system.
- MySQL server installed and running.
- Sequelize or Knex.js for ORM/SQL building (depending on your implementation).

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:

bash git clone -b Assignment7 https://github.com/dannnshe/csbc1030_Assignment1.git

Navigate to the project directory:

bash cd [Your-Directory]

### 2. Install Dependencies

Install the required Node.js modules:

bash npm install

### 3. Database Setup

Set up a MySQL database and note the credentials. Create the required tables to match the structure of users.json from the sample folder, excluding nested properties like address and company.

### 4. Configuration

Update the application configuration:

- Configure the database connection details in your application. This might involve setting up environment variables or modifying a configuration file.
- Ensure ORM or SQL Builder is properly configured to connect to your MySQL database.

### 5. Branching

Make sure you are on the correct branch for this assignment:

bash git checkout [Your-branch]

## Running the Application

Start the application by running:

bash node app.js

## Features

The application supports the following features:

- GET /users: Fetch all users.
- GET /users/:id: Fetch a user by ID, restricted to the user making the request.
- POST /users: Add a new user, restricted to requests from user ID = 1.
- POST /users/login: Authenticate a user and return an authentication token.
