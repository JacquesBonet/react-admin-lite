import { applyMiddleware, createStore } from 'redux'
import fetchMiddleware from '../middlewares/Fetch'
import reducers from '../reducers'

export default () =>
  createStore(reducers, applyMiddleware(fetchMiddleware))
