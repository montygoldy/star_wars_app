import constants from "./Types";

export default {
  //GET Info
  getPeopleInfoRequest: value => ({
    type: constants.GET_PEOPLE_INFO_REQUEST,
    payload: {
      value
    }
  }),

  getPeopleInfoSuccess: peopleData => ({
    type: constants.GET_PEOPLE_INFO_SUCCESS,
    payload: {
      peopleData
    }
  }),

  getPeopleInfoErrors: errors => ({
    type: constants.GET_PEOPLE_INFO_ERRORS,
    payload: {
      errors
    }
  }),
}