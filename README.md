# Online 🟢
This is a simple, versatile api to which client's can make an authenticated request to in order to show that they are online. Any client can then make a request to /:userid to check whether a user is currently online or offline (if they have made a request recently).

- 🟢 - Online
- ⚫ - Offline
- 🔵 - Success
- 🔴 - Error

## Database
Online uses a MariaDB database. It connects using Sequelize, and you should use the following environmental variables:
- DB_HOST
- DB_NAME
- DB_USERNAME
- DB_PASSWORD

## Authentication
The authentication for this service is designed to be very modular. `auth.js` is used as express middleware, and it should set `req.user` to the user id. You can fork this project and add your own authentication system if you want to use it. For Alles authentication, the environmental variables `ALLES_ID` and `ALLES_SECRET` are required. They must be the credentials for a first party Alles application. It uses the first party api to get the user id for a session token, which is sent in the authentication header.