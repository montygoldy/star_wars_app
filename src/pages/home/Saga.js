import { call, put, takeLatest } from "redux-saga/effects";
import actionTypes from "./Types";
import api from "./Api";
import actions from "./Actions";
import axios from "axios";

const getPeopleInfoApi = (value) => {
  // Api call to get people
  return axios.get(`https://swapi.co/api/people/${value}`)
  .then(async (response) => {

    // Api call to get selected people films data
    if (response.data.films.length) {
      const getFilmData = response.data.films
        .map(async (url) => {
          return await axios.get(url)
          .then((res) => {
            return res.data
          }).catch(error => {
            // handle error
            return error;
          })  
        })

      const results = await Promise.all(getFilmData)

      // Updating original fils array with new data
      response.data.films = results;
    } 

    return response;
  }).catch((error) => {
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