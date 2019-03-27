import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Spinner } from 'components';
import { actions } from './store/actions';
import { Container } from './styled';
import { selectors } from './store/reducer';

const Customers = ({ loaders, getCustomers, customers }) => {
  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <Container>
      <div>
        <h1>CUSTOMERS:</h1>
        <Spinner show={loaders.customersList} />
        <ul>
          {customers.length > 0 &&
            !loaders.customersList &&
            customers.map(({ name, login, picture }) => (
              <li key={login.uuid}>
                <img src={picture.thumbnail} alt={name.first} />
                <p>{`${name.title} ${name.first} ${name.last}`}</p>
              </li>
            ))}
        </ul>
        <Link to="/">Home</Link>
      </div>
    </Container>
  );
};

Customers.propTypes = {
  loaders: PropTypes.object.isRequired,
  getCustomers: PropTypes.func.isRequired,
  customers: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

const mapStateToProps = (state) => ({
  loaders: selectors.getLoaders(state),
  customers: selectors.getCustomers(state)
});

const mapDispatchToProps = {
  getCustomers: actions.fetchCustomers.request
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);
