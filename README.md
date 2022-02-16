# MERN Stack Course
---
Building a restaurant reviewer to learn about the MERN Stack 

Learning MERN stack with the following resource  from FreeCodeCamp \
https://www.youtube.com/watch?v=mrHNSanmqQ4&ab_channel=freeCodeCamp.org

# Notes for BackEnd
## server.js 
- Configures an Express Server

## index.js
- Connect the database and start the server 

## .env file
- Store environment variables 
- Set the uri of data - Do so by going back to MongoDB to get the uri 

## api (directory)
### restaurants.route.js
- Import Express
- Get access to the Express Router
- Create the routes that people can go to

### Controller Files 
- API Calls and return the result of those calls 
- What the user can do (uses methods from DAO) 

## dao (Data Access Objects) Directory 
- query the database directly (Get data from DB directly) 
- consists of various getter methods for restaurants
- add, update, delete for the reviews 

