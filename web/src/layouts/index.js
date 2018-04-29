import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={ data.site.siteMetadata.title }
      meta={ [
        { name: 'description', content: 'Guy Thomas Resume' },
        { name: 'keywords', content: 'React,Node,Python,Go,HTML,CSS,Software Engineer,Developer,San Francisco,Full Stack,Front End' },
      ] }
    />
    { children() }
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
