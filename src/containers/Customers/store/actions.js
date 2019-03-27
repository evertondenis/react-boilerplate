import { createAction } from 'redux-actions';
import {
  createType,
  createAsyncTypes,
  createAsyncActions
} from 'core/utils/reduxAsync';

export const types = {
  UPDATE_LOADERS: createType('customers', 'UPDATE_LOADERS'),
  FETCH_CUSTOMERS: createAsyncTypes('customers', 'FETCH_CUSTOMERS')
};

export const actions = {
  updateLoaders: createAction(types.UPDATE_LOADERS),
  fetchCustomers: createAsyncActions(types.FETCH_CUSTOMERS)
};
