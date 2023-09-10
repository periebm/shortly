# &middot; Shortly &middot; 

An URL shortening system.

## About

This is a web application that allows users to sign up, log in, and add their URLs to be shortened. Each time the URL is accessed, the access count is also recorded in the database.

## Technologies
The following tools and frameworks were used in the construction of the project:<br>
<p>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>

</p>

## Database

In this project, a relational database PostgreSQL was used. To use it, you can create the database on your own machine using the "dump.sql" file.

## Installing / Getting started

1. Clone this repository
2. Install dependencies
```bash
npm i
```
3. Configure the .env file with the DATABASE_URL
4. Run the back-end with
```bash
npm start
```
5. You can optionally build the project running
```bash
npm run build
```