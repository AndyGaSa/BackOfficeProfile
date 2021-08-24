import actionTypes from '../actions/action.types';

export default function StoreReducer(userInfo = {}, { type, payload }) {
  let newUserInfo = userInfo;
  switch (type) {
    case actionTypes.UPDATE_STORE:
      newUserInfo = { ...newUserInfo, ...payload };
      break;

    default:
      break;
  }

  return newUserInfo;
}

module.exports = StoreReducer;
