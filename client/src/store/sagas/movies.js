import { takeLatest, delay, call } from 'redux-saga/effects';

import { Types as MoviesTypes, fetchSuccess } from '../ducks/movies';

const debounceTime = 500; /* In milliseconds */

function* fetchMovies() {
  yield delay(debounceTime);

  try {
    const response = yield call(api.get, '/movies');

    yield put(fetchSuccess(response.data));
  } catch {
    yield call(alert, 'Falha ao carregar os filmes :(');
  }
}

export default function* rootSaga() {
  yield takeLatest(Types.FETCH_REQUEST, fetchMovies);
}
