import {
  GET_USER_PROFILE_DATA,
  GET_USER_PROFILE_DATA_SUCCESS,
  UPDATE_USER_PROFILE,
  DELETE_USER_POST,
} from "../actions";

const initialState = {
  userProfileData: [],
};

const UserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_DATA:
      return {
        ...state,
      };
    case GET_USER_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        userProfileData: action.payload,
      };
    case UPDATE_USER_PROFILE:
      return {
        ...state,
      };
    case DELETE_USER_POST:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default UserProfileReducer;
