import { types } from '../type/types';

const initialState = {
  displayName: null,
  uid: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return action.payload;
    case types.authLogout:
      return { ...initialState };

    default:
      return state;
  }
};
