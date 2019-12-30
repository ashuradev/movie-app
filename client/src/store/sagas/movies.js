import { takeLatest, delay, call, put } from 'redux-saga/effects';

import { Types, fetchSuccess } from '../ducks/movies';

import api from '../../services/api';

function* fetchMovies({ payload: { search } }) {
  yield delay(500);

  try {
    const response = yield call(api.get, `/movies?search=${search}`);

    yield put(fetchSuccess(response.data.data));
  } catch (e) {
    yield call(alert, `Falha ao carregar os filmes (${e.message}).`);
  }
}

export default function* rootSaga() {
  yield takeLatest(Types.FETCH_REQUEST, fetchMovies);
}
