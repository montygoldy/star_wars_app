import { all, fork } from "redux-saga/effects";

// Root
import { MainSaga } from "../../pages/home/Saga";

// Pages

export default function* rootSaga() {
  yield all([
    // Root
    fork(MainSaga),

    // Pages
    
  ]);
}
