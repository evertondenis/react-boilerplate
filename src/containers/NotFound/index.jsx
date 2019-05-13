import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Brand from 'components/Brand';
import { GlobalStyle } from 'core/assets/style/global';
import logo from 'core/assets/images/logo.svg';
import { AppHeader, AppContainer } from './styled';

class NotFound extends PureComponent {
  render() {
    return (
      <Fragment>
        <AppContainer>
          <AppHeader>
            <Brand brandImage={logo} />
            <div>
              Page not found <Link to="/">Return to Home Page</Link>
            </div>
          </AppHeader>
        </AppContainer>
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default NotFound;
