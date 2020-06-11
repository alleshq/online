# Online 🟢
This is a simple, versatile api to which client's can make an authenticated request to in order to show that they are online. Any client can then make a request to /:userid to check whether a user is currently online or offline (if they have made a request recently).

🟢 - Online
⚫ - Offline
🔵 - Success
🔴 - Error

## Database
Online uses a MariaDB database. It connects using Sequelize, and you should use the following environmental variables:
- DB_HOST
- DB_NAME
- DB_USERNAME
- DB_PASSWORD