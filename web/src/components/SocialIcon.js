import React from 'react';
import PropTypes from 'prop-types';

const urlMapper = {
  linkedin: username => `https://www.linkedin.com/in/${ username }`,
  github: username => `https://github.com/${ username }`,
  medium: username => `https://medium.com/@${ username }`,
  'cloud-download': filePath => filePath,
};

class SocialIcon extends React.Component {
    static propTypes = {
      platform: PropTypes.oneOf( Object.keys( urlMapper ) ).isRequired,
      username: PropTypes.string.isRequired,
    };

    render() {
      const { platform, username } = this.props;
      return (
        <li className="a-header">
          <a href={ urlMapper[ platform ]( username ) } target="_blank" rel="noopener noreferrer" className="c-social-button  t-social-button">
            <i className={ `fa  fa-lg  fa-${ platform }` } />
          </a>
        </li>
      );
    }
}

export default SocialIcon;
