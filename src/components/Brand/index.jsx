import React from 'react';
import PropTypes from 'prop-types';
import { BrandStyled } from './styled';

const Brand = React.memo(function Brand({ brandImage }) {
  return <BrandStyled src={brandImage} alt="brand" />;
});

Brand.propTypes = {
  brandImage: PropTypes.string.isRequired
};

export default Brand;
