import { handleActions } from 'redux-actions';
import { types } from './actions';

const initialState = {
  customers: {},
  loaders: {
    customersList: true
  }
};

export default handleActions(
  {
    [types.UPDATE_LOADERS]: (state, { payload }) => ({
      ...state,
      loaders: { ...state.loaders, ...payload }
    }),
    [types.FETCH_CUSTOMERS.SUCCESS]: (state, { payload }) => ({
      ...state,
      customers: payload
    })
  },
  initialState
);

export const selectors = {
  getLoaders: (state) => state.customers.loaders,
  getCustomers: (state) => state.customers.customers
};
