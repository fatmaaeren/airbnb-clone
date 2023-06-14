### Important Note
---

There is no mongoDB connection setup in this project. Establish the connection according to the following environments.

local development: In the .env file located in the api directory, assign the mongodb connection clause to a variable (make sure to name this variable MONGO_URL). This file will be ignored by git so your db credentials will be kept safe when the app is deployed.


### Owerviev
---
![img1](https://github.com/fatmaaeren/booking-app/assets/124514606/febfe622-22a6-4c9b-9b02-24a3e67f5d3a)
---
![img3](https://github.com/fatmaaeren/booking-app/assets/124514606/a5932672-8e1b-4e5a-9e86-0cd0e95d370c)
---
![img2](https://github.com/fatmaaeren/booking-app/assets/124514606/faeb45ba-2e1f-4383-846f-c272b536298a)

### Getting Started
---

This repository is mainly aimed at helping you get started on a MERN stack implementation with a solid file structure. Make a copy of this template repository for your project teams to get started.

Since this project will host both the client application and the server application, there will be node modules in two different places. First run ```npm install```  from root. After that, run this command whenever you want to reinstall all modules. This is a script we defined in package.json.

### File Structure
---

#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `context` - This folder holds context.
    -  #### `pages` - This folder holds all of the different pages that will make up our views
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `api` - Holds the server application
- #### `models` - This holds all of our data models
- #### `index` - This holds all of our HTTP to URL path associations for each unique url
- #### `.env` - This holds all environment variables
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!
