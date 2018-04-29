import React from 'react';
import PropTypes from 'prop-types';

class ContactDetail extends React.Component {
    static propTypes = {
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      link: PropTypes.string,
    };

    static defaultProps: {
        link: '',
    };

    renderValue() {
      const { label, value, link } = this.props;
      if ( link ) {
        return (
          <a href="http://www.guythomas.me" target="_blank" rel="noopener noreferrer" className="t-link-container">
            <h4>{ label }</h4>
            <p>
              <span className="t-link-container__item--blended">
                { value }
              </span>
            </p>
          </a>
        );
      }
      return (
        <div>
          <h4>{ label }</h4>
          <p>
            <span className="t-link-container__item--blended">
              { value }
            </span>
          </p>
        </div>
      );
    }

    render() {
      return (
        <div className="o-grid__col-md-3  o-grid__col-sm-6">
          <div className="a-header  o-content">
            <div className="o-content__body" >
              { this.renderValue() }
            </div>
          </div>
        </div>
      );
    }
}

export default ContactDetail;
