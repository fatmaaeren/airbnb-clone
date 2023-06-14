### Important Note

There is no mongoDB connection setup in this project. Establish the connection according to the following environments.

local development: In the .env file located in the api directory, assign the mongodb connection clause to a variable (make sure to name this variable MONGO_URL). This file will be ignored by git so your db credentials will be kept safe when the app is deployed.


### Owerviev
![img1](https://github.com/fatmaaeren/booking-app/assets/124514606/febfe622-22a6-4c9b-9b02-24a3e67f5d3a)

### Getting Started

This repository is mainly aimed at helping you get started on a MERN stack implementation with a solid file structure. Make a copy of this template repository for your project teams to get started.

Since this project will host both the client application and the server application, there will be node modules in two different places. First run ```npm install```  from root. After that you will run ```npm run-script install-all```  from root. After that, run this command whenever you want to reinstall all modules. This is a script we defined in package.json.

### File Structure
