# crud-user
Little react/redux project to show crud behavior

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

## steps to do

* define a path representing the resource endpoint
* define a schema describing the object fields
* export a connector permitting to read the data, display it and manage it

For the Users object, we have to write

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


## Deploymeent

I didn't have time to works on the deploymeent

The best thing to do is embed the database on express to facilitate deployment
Another solution deploy on the cloud like heroku.
Fo local deployment build a docker container.


## tests

didn't have time to execute


## What is unit test

The role of unit test is:
- test a component using all the values possible in input.
- disturb the output to throw error like network, memory, screen resolution, etc


Some guys think unit test like a black box and use mock to substitute the sublayer.
I don't agrea totally with this approach. 
I prefer to use proxy or stub like a fake server than mocking the call to the server




### To finish

Many others things to say but I must stop.


Thks for the exercice.



Jacques
