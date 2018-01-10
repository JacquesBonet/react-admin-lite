import users from "./users";
import {actions} from "redux-easy2-crud";
import USERS from "../constants/users";

describe('reducer', function () {
  describe('initial state', function () {
    var initialState;

    beforeEach(function () {
      initialState = users(undefined, []);
    });

    it('should have an empty users array', function () {
      expect(initialState).toEqual([]);
    });
  });

  describe('ADD_USERS_SUCCESS', function () {
    var state = [];
    const user = {path: USERS, nom: "Bonet", prenom: "Jacques"};

    beforeEach(function () {
    });

    it('adds the user code to the array', function () {
      const action = actions.createSuccess(user);
      state = users(state, action);
      expect(state[0]).toMatchSnapshot();;
    });
  });
});

