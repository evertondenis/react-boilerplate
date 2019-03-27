import { call, put, takeEvery, all } from 'redux-saga/effects';
import CustomersProvider from 'core/providers/customers';
import { actions, types } from './actions';

function* loadCustomers() {
  try {
    yield put(actions.updateLoaders({ customersList: true }));
    const customers = yield call(CustomersProvider.all, {
      results: 5,
      nat: 'us,fr,br'
    });
    yield put(actions.fetchCustomers.receive(customers.results));
  } catch (error) {
    const { message } = error.response.data;
    console.log('message error: ', message);
    yield put(actions.fetchCustomers.error(message));
  } finally {
    yield put(actions.updateLoaders({ customersList: false }));
  }
}

export default function* root() {
  yield all([takeEvery(types.FETCH_CUSTOMERS.REQUEST, loadCustomers)]);
}
