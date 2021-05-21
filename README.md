# react-admin-lite
React/redux admin project to show crud behavior and how to manage resources with little lines of code

# installation

`npm install`

# test

̀ npm run test`


# run

* launch db server

`npm run start:db`

* launch webserver

`npm run start`

# what is interesting in this project

There is very little things to do to have an admin like web application permitting to read, create, delete, update
objects store in a database 

## steps to do for managing a REST resource

* define a path representing the resource endpoint
* define a schema describing the fields of the resource
* export a connector permitting to inject the data, display it and create, update, delete, search

Take one example:
For the Users object, we have just to write

```jsx
export const path = 'users'
export const schema = [
   { field: 'firstName', type: 'text', required: true },
   { field: 'lastName', type: 'text', required: true },
   { field: 'age', type: 'number', required: false },
   { field: 'dateOfBirth', type: 'date', required: false },
]
export default doConnect(path, schema)(Docs)
```
The code must be put under a subfolder of the `pages` directory. The subfolder name is the name of the resource.

Ex: `pages/users`

Of course, if you like a custome behavior, its always possible.


# project architecture

The `crud` directory contains the admin framework of the application. We find some redux codes and UX.
The actions and reducers works with any REST resources.

We use redux middleware for the fetch and the search.

The router take the path of the resources to build the routing engin.

The UX use Bootstrap 5 directly without react layer. That can be change very easly.

The forms use react-hook-form. 





