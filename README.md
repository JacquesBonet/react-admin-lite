# crud-user
Little react/redux project to show crud behavior

# installation

`npm install`

# test

̀ npm run test`


# run

* launch crud server

`npm run server`

* launch webserver

`npm run start`

# what is interesting in this project

## redux state management

CRUD operation is very easy.

### redux action

To persist a kind of object, User for example, the developer has to define a path corresponding to the REST endpoint, here 'users,'
and write only 4 functions, each function is one line of code

```
const createUser = (user) => (create(USERS_PATH, user));
const readUsers = () => (read(USERS_PATH));
const updateUser = (user) => (update(USERS_PATH, user));
const deleteUser = (user) => (del(USERS_PATH, user));
```

### redux reducer

The reducer is very easy too write too. For User 

```
export const usersReducer = (state = initialState, action) => (
  crudReducer(state, [USERS_PATH], action)
)
```

where initialState is:

```jsx
`const initialState = {
  isLoading: false,
  payload: [],
}

### how components take actions and state?
```
by props.
Here User component

```jsx
export const Users = ({users, createUser, deleteUser, updateUser}) => {
```

There props are build by this function

```jsx
export default doConnect(USERS_PATH, actions)(Users);
```

Far more easier than to call mapStateToProps, mapDispatchToProps and bindActionCreators


The doConnect read also the data for the component using the first action passed in parameter.


## Schema

We use a schema for the User object.


```jsx
export const schema = [
  {field: 'firstName', type: 'text', required: true},
  {field: 'lastName', type: 'text', required: true},
  {field: 'age', type: 'number', required: false},
  {field: 'dateOfBirth', type: 'date', required: false}
]
```

This permit to build automatically the forms and list of values
Example for the create and update form:

```jsx
         <tr>
            {
              schema.map(({field, type, required}, idx) =>
                <td key={idx}>
                  <input
                    {...register(field)}
                    type={type}
                    placeholder={inflection.transform(field, ['tableize', 'titleize'])}
                    required={required}
                    defaultValue={user ? user[field] : ''}
                  />
                </td>
              )
            }
```


## router

The js class is load when the page is call.

```jsx
export const Routes = () => (
  <>
    <Navbar/>
    <main className="content">
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          {routes.map(path => (
            <Route key={path} exact path={path} render={props => (
              React.createElement(React.lazy(() => import(`./pages${path}`)), props)
            )}/>
          ))}
        </Suspense>
        <Redirect to={'/home'}/>
      </Switch>
    </main>
  </>
);
```

## Deploymeent

I didn't have time to works on the deploymeent

The best thing to do is embed the database on express to facilitae deploymeent


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
