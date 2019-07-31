import constants from "./Types";

const initialState = {
  peopleInfo: {},
  errors: {},
  currentMenu: 0,

  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_PEOPLE_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
        currentMenu: action.payload.value,
      }
    case constants.GET_PEOPLE_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        peopleInfo: action.payload.peopleData,
      }

    case constants.GET_PEOPLE_INFO_ERRORS:
      return {
        ...state,
        isLoading: false,
        errors: action.payload.errors,
      }

    default:
      return state;
  }
};
