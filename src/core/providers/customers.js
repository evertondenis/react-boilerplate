import Api from './api';

class ProviderCustomers {
  static all(params) {
    return Api.request('/', { method: 'GET', params });
  }
}

export default ProviderCustomers;
