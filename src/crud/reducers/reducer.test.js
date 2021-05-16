import { createSuccess } from '../actions/docs'
import { USERS_PATH } from '../../models/users'
import { factoryReducer } from './factoryReducer'

describe('reducer', function () {
   describe('initial state', function () {
      let initialState

      beforeEach(function () {
         initialState = factoryReducer(undefined, [])
      })

      it('should have an empty users array', function () {
         expect(initialState).toEqual({ isLoading: false, payload: [] })
      })
   })

   describe('ADD_USERS_SUCCESS', function () {
      let state = { isLoading: false, payload: [] }
      const user = { path: USERS_PATH, nom: 'Bonet', prenom: 'Jacques' }

      beforeEach(function () {})

      it('adds the user code to the array', function () {
         const action = createSuccess(USERS_PATH, user)
         state = factoryReducer(state, action)
         expect(state[0]).toMatchSnapshot()
      })
   })
})
