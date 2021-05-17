import { createSuccess, delSuccess, updateSuccess } from '../actions/docs'
import { path as USERS_PATH } from '../../models/users'
import { factoryReducer } from './factoryReducer'

describe('reducer', function () {
   describe('initial state', function () {
      let initialState

      beforeEach(function () {
         initialState = factoryReducer(USERS_PATH)(undefined, {})
      })

      it('should have an empty users array', function () {
         expect(initialState).toEqual({ isLoading: false, payload: [] })
      })
   })

   describe('CRUD actions', function () {
      let state = { isLoading: false, payload: [] }
      const user = { id: 1, nom: 'Bonet', prenom: 'Jacques' }
      let reducer = null

      beforeAll(function () {
         reducer = factoryReducer(USERS_PATH)
      })

      it('adds the user to the store', function () {
         const action = createSuccess(USERS_PATH, user)
         const newState = reducer(state, action)
         expect(newState.payload[0]).toEqual(user)
      })

      it('update the user to the store', function () {
         const action = delSuccess(USERS_PATH, { id: 1 })
         const newState = reducer(state, action)
         expect(newState.payload).toEqual([])
      })

      it('remove the user the store', function () {
         const action = updateSuccess(USERS_PATH, { ...user, nom: 'Bonet2' })
         const newState = reducer(state, action)
         expect(newState.payload[0]).toEqual({ ...user, nom: 'Bonet2' })
      })
   })
})
