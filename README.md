# Url-shortner-nodeJS

Build the Url shortner Using Ejs template, Node Js, Express, and Mongodb. The app converts long awful Url to very short Url id. You can copy the shortUrl link and paste it to wherever you want to post. For e.g. Social medias, emails, messages and so on.

### Deployed at Heroku

[Url Shortener App](https://url-shortener-webapp.herokuapp.com/)

# File Structure

The folder architecture is based on Models, Views, and Controllers (MVC) application. The project structure will look like this:

### contollers

The logic of our site, and the glue between models and views. Here we call our models to get the data, then we put that data on our views to be sent to the users.

### models

The part of our application that will deal with the database or any data-related functionality.

### public

Accessing static files are very useful when you want to put your static content accessible to the server for usage. To serve static files such as images, CSS files, and JavaScript files, etc we use the built-in middleware in node.js i.e. express.static.

### routes

Routing defines the way in which the client requests are handled by the application endpoints. This app contains #GET, #POST, #DELETE routes.

### views

Everything the user will see — basically, the pages that we’re going to send to the client.

### server

The entry file. The head of all files.

# Quick Start

## Install dependencies

npm install

#Note: if you decide to also use a .env file, make sure you install the package with npm install dotenv and add it to .gitignore so you don’t publish any sensitive information.

#install (npm i dotenv) to create .env file, where you can store your environment variables locally for development purpose. Create .env file with your mongoURI.

## Run

npm start

"scripts":{
"devStart": "nodemon server.js"
}

npm devStart

#### Endpoint to create short url

POST (/shortUrls)

#### Endpoint to delete the existence data(url)

DELETE (/:id)

#### Endpoint to show new and the existence data(url)

GET (/)
