import actionTypes from './action.types';

export default function loadStocks(data) {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_STORE,
      payload: data,
    });
  };
}
