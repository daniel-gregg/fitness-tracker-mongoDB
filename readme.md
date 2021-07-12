# Fitness-tracker (MongoDB and Mongoose practice)
The 'fitness-tracker' is a basic exercise recording application that allows a user to record the attributes of their exercises across time, and to view summary statistics of those workouts. 

This application was undertaken as an educational program to learn express-based routing using mongoose (npm) and the mongoDB NoSQL database system. All front-end code came pre-built, so my own work on this application is purely associated with back-end functionality and setup. This included all components in the models and controllers files, configuration of the server.js file and set up of the Heroku deployment. 

A working demo of the application can be viewed at:
hhttps://fitness-tracker-practice.herokuapp.com/

## Author
github.com/daniel-gregg

## Description
This blog-posting application was developed as an initial foray into learning about the creation of node-express-NoSQL applications using MongoDB and mongoose (npm).

Key learnings from this project were:
- Setting up routing under a mongoose model framework
- Interactions (get, put, post) with mongoDB through the mongoose models framework
- Deployment of a mongoDB-based application on Heroku

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)

## Installation
- You must have Node installed on your computer. See here https://nodejs.org/en/download/. 
- Check that you have the latest version of npm installed. In node type this into the console: 'npm install npm@latest -g'
- npm must first be initialised using 'npm init' in your working directory
- dependencies can then be installed using 'npm install PACKAGE' where 'PACKAGE' refers to the relevant dependency. 

### Dependencies include:
- mongoose
- express
- dotenv
- morgan
- 

Additional option dependies are:
- nodemon

### Set up your local environment
- You will need to point the local server host to your own local mongoDB. First create a new DB in your mongo console or through your bash/cmd console. 
- Alternatively you can set up a Heroku mongoDB and set up your environmental variables following the outlines posted on Heroku (namely get your connection string and replace the '<password>' and 'yourDB' sections with the respective values).

## Usage
The application is designed as a single-user app. The user can create new workouts, add a new exercise to each workout and indicate completion of that workout. 

Users can review their exercises across duration and wieght-lifted meaasures on their dashboard page. 

## Screenshots
Home screen:
![homescreen view](/assets/homescreen.png?raw=true "Homescreen view")

Add new workout: 
![dashboard view](/assets/dashboard.png?raw=true "Dashboard view")

Dashboard/Stats:




