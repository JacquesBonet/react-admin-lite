import users from "./users";
import {createSuccess} from "../actions/docs";
import USERS from "../constants/users";

describe('reducer', function () {
  describe('initial state', function () {
    var initialState;

    beforeEach(function () {
      initialState = users(undefined, []);
    });

    it('should have an empty users array', function () {
      expect(initialState).toEqual({"isLoading": false, "payload": []});
    });
  });

  describe('ADD_USERS_SUCCESS', function () {
    var state = {"isLoading": false, "payload": []};
    const user = {path: USERS, nom: "Bonet", prenom: "Jacques"};

    beforeEach(function () {
    });

    it('adds the user code to the array', function () {
      const action = createSuccess( USERS, user);
      state = users(state, action);
      expect(state[0]).toMatchSnapshot();;
    });
  });
});

