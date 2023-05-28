import { GET_HOME_DATA } from "../action/HomeAction";

const initialState = {
  homeData: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_DATA:
      return {
        ...state,
        homeData: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
