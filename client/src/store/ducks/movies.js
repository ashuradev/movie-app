const INITIAL_STATE = [];

export const Types = {
  FETCH_REQUEST: 'movies/FETCH_REQUEST',
  FETCH_SUCCESS: 'movies/FETCH_SUCCESS'
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH_REQUEST:
      return [...state, ...action.payload];

    default:
      return state;
  }
}

export const fetchRequest = search => ({
  type: Types.FETCH_REQUEST,
  payload: { search }
});

export const fetchSuccess = movies => ({
  type: Types.FETCH_SUCCESS,
  payload: [movies]
});
