import { fork, all } from 'redux-saga/effects';
import { makeRestartable } from 'core/utils/saga';
import CustomersSaga from 'containers/Customers/store/saga';

const root = makeRestartable(function* run() {
  yield all([fork(CustomersSaga)]);
});

export default root;
