# My App Name

### Rest API built with Express and Sequelize

List of user routes:

| Route     | HTTP      | Header(s)        | Body       | Description|
| --------- | --------- | -----------------| -----------| -----------|
  `/api/users`| GET | `none `| `none` | Get all the users
   `/api/users/:id` | GET |` none` | `none` | Get a single user
   ` /api/users` | POST | `none` | `name : String`**(Required)**, `email:String`**(Required)**, `password :String`**(Required)** | Create a user
   `/api/users/:id` | DELETE | none | none | Delete a user
   `/api/users/:id` | PUT | none | `name : String`**(Required)**, `email:String`**(Required)**, `password :String`**(Required)** | Update a user with new info
       

List of filters routes:

| Route     | HTTP      | Description|
| --------- | --------- | -----------|
/api/users?




# Usage 
Make sure you have NODE.js and npm installed in your computer, and then run
these commands:


```
$ npm install
$ npm start
$ npm run dev

```

Access the API via http://localhost:3000/api