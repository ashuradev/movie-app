import { takeLatest, delay, call, put } from 'redux-saga/effects';

import { Types, fetchSuccess } from '../ducks/movies';

import api from '../../services/api';

const debounceTime = 500;

function* fetchMovies() {
  yield delay(debounceTime);

  try {
    const response = yield call(api.get, '/movies');

    yield put(fetchSuccess(response.data.data));
  } catch (e) {
    yield call(alert, `Falha ao carregar os filmes (${e.message}).`);
  }
}

export default function* rootSaga() {
  yield takeLatest(Types.FETCH_REQUEST, fetchMovies);
}
