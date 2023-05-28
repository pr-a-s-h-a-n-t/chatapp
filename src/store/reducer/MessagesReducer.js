import {
  GET_ALL_MESSAGES,
  GET_ALL_MESSAGES_SUCCESS,
  POST_MESSAGE,
  DELETE_MESSAGE,
} from "../actions";

const initialState = {
  messages: [],
};

const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MESSAGES:
      return {
        ...state,
      };
    case GET_ALL_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload,
      };
    case POST_MESSAGE:
      return {
        ...state,
      };
    case DELETE_MESSAGE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default MessagesReducer;
