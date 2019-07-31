import { call, put, takeLatest } from "redux-saga/effects";
import actionTypes from "./Types";
import api from "./Api";
import actions from "./Actions";
import axios from "axios";

const getPeopleInfoApi = (value) => {
  return axios.get(`https://swapi.co/api/people/${value}`)
  .then((response) => {
    return response;
  }).catch(function (error) {
    // handle error
    return error
  })
}
  

function* getPeopleInfoSaga(action) {
  try {
    const response = yield call(
      getPeopleInfoApi,
      action.payload.value,
    );
    
    if (response.status === 200) {
      yield put(actions.getPeopleInfoSuccess(response.data));
    } else {
      yield put(actions.getPeopleInfoErrors({ errors: "Something went wrong" }));
    }
  } catch (error) {
    yield put(actions.getPeopleInfoErrors(error));
  }
}

export function* MainSaga() {
  yield takeLatest(actionTypes.GET_PEOPLE_INFO_REQUEST, getPeopleInfoSaga);
}