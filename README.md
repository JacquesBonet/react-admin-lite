# crud-user
Little react/redux project to show crud behavior

# installation

`npm install`

# test

̀ npm run test`


# run

* launch db server

`npm run server`

* launch webserver

`npm run start`

# what is interesting in this project

## redux management

CRUD operations are very easy.

### redux action

To manage an object (create, list, update, delete), User object for example, the developer has to define:
* a path ('users')
```
export const path = 'users'
```
* a schema listing all the fields which must be persisted
```
export const schema = [
{ field: 'firstName', type: 'text', required: true },
{ field: 'lastName', type: 'text', required: true },
{ field: 'age', type: 'number', required: false },
{ field: 'dateOfBirth', type: 'date', required: false },
]
```
* update the route in adding the object path in the list of routes
```
export const routes = [`/home`, `/users`]
```
* bind the object to redux
  * create a `directory` under pages directory
  * create a `index.js` file under `pages\users` directory
  * write this export inside the index file (its the redux connect)
```jsx
export default doConnect('users', schema)(Docs)
```
  * declare the store in adding the resource path (`user` for example) in the factoryCreateStore function defined on 
the redux Provider
```jsx
ReactDOM.render(
   <Provider store={factoryCreateStore(['user'])}>
      <HashRouter>
         <Routes />
      </HashRouter>
   </Provider>,
   document.getElementById('root')
)
```


In doing that, This permit to have automatically the CRUD operations of a resource in the web application.



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
