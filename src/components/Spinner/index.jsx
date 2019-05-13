import React from 'react';
import PropTypes from 'prop-types';
import { StyledLoader } from './styled';

const Spinner = React.memo(function Spinner({ show }) {
  return (
    show && (
      <StyledLoader>
        <div className="loading">
          <div className="spinner">
            <div className="mask">
              <div className="maskedCircle" />
            </div>
          </div>
        </div>
      </StyledLoader>
    )
  );
});

Spinner.propTypes = {
  show: PropTypes.bool.isRequired
};

export default Spinner;
