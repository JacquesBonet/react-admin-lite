import * as docActions from '../actions/docs'
import * as TYPES from '../constants/docs'
import { replace1 } from '../utils/match'


function parseJSON(response) {
  const contentType = response.headers.get('content-type')

  if (contentType && contentType.indexOf('application/json') !== -1) {
    return response.json()
  }
  return new Promise((resolve, reject) =>
    resolve({ ok: response.ok, status: response.status, statusText: response.statusText })
  )
}

function checkSystemError(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    throw response
  }
}

function isError({ Code =0, code = 0, errors = [], status = 0 }) {
  return ((Code < 0 || code < 0) && Code !== '-3') || status >= 400 || errors.length > 0
}

const ROOT_PATH = 'http://localhost:3001/'

export function rawFetchPromise(url, method = 'GET', payload = undefined) {
  const fullPath = ROOT_PATH + url
  const opts = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
  if (payload) {
    opts.body = JSON.stringify(payload)
  }

  return fetch(fullPath, opts)
    .then(checkSystemError)
    .then(parseJSON)
}

export default store => next => action => {
  const returnValue = next(action)

  switch (action.type) {
    case TYPES.READ:
      action.id ? readIdStart(store.dispatch, action.path, action.id) : readStart(store.dispatch, action.path)
      break
    case TYPES.CREATE:
      createStart(store.dispatch, action.path, action.payload)
      break
    case TYPES.DELETE:
      delStart(store.dispatch, action.path, action.payload)
      break
    case TYPES.UPDATE:
      updateStart(store.dispatch, action.path, action.payload)
      break
    default:
      break
  }
  return returnValue
}

/**
 *
 * @param path   the path to read. path is the type of doc to read
 */
function readStart(dispatch, path) {
  return rawFetchPromise(path)
    .then(result => {
      isError(result)
        ? dispatch(docActions.crudError(TYPES.READ_ERROR, path, result))
        : dispatch(docActions.readSuccess(path, result))
    })
    .catch(err => {
      dispatch(docActions.crudError(TYPES.READ_ERROR, path, err))
    })
}

/**
 * Read path/id ressource
 * @param dispatch
 * @param path    The ressource root path
 * @param id      The ressource id
 * @returns {Promise.<T>}
 */
function readIdStart(dispatch, path, id) {
  const completePath = replace1(path, id)
  return rawFetchPromise(completePath)
    .then(result => {
      isError(result)
        ? dispatch(docActions.crudError(TYPES.READ_ERROR, path, result))
        : dispatch(docActions.readIdSuccess(completePath, id, result))
    })
    .catch(err => {
      dispatch(docActions.crudError(TYPES.READ_ERROR, completePath, err))
    })
}

function createStart(dispatch, path, doc) {
  return rawFetchPromise(path, 'post', doc)
    .then(result => {
      isError(result)
        ? dispatch(docActions.crudError(TYPES.CREATE_ERROR, path, result))
        : dispatch(docActions.createSuccess(path, { ...doc, ...result }))
    })
    .catch(err => {
      dispatch(docActions.crudError(TYPES.CREATE_ERROR, path, err))
    })
}

function updateStart(dispatch, path, aDoc) {
  return rawFetchPromise(`${path}/${aDoc.id}`, 'put', aDoc)
    .then(result => {
      isError(result)
        ? dispatch(docActions.crudError(TYPES.UPDATE_ERROR, path, result))
        : dispatch(docActions.updateSuccess(path, { ...aDoc, ...result }))
    })
    .catch(err => {
      dispatch(docActions.crudError(TYPES.UPDATE_ERROR, path, err))
    })
}

function delStart(dispatch, path, aDoc) {
  return rawFetchPromise(`${path}/${aDoc.id}`, 'delete', aDoc)
    .then(result => {
      isError(result)
        ? dispatch(docActions.crudError(TYPES.CREATE_ERROR, path, aDoc))
        : dispatch(docActions.delSuccess(path, aDoc))
    })
    .catch(err => {
      dispatch(docActions.crudError(TYPES.DELETE_ERROR, path, err))
    })
}

