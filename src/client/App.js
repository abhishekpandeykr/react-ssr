import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import ErrorBoundary from './components/ErrorBoundry';
import Header from './components/Header';
import Footer from './components/Footer';
import image from '../../assets/logo/icon.png';
// import * as style from '../../assets/css/style.css';
// import * as style from '../../assets/css/style.css';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      <h3>Test</h3>
      <img src={image} />
      <div className="container">
        <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
  route: null,
};

export default {
  component: App,
};
