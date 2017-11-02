import React from 'react';
import PropTypes from 'prop-types';

class Layout extends React.Component {
  render() {
    const { hash='' } = location;
    const { children } = this.props;

    return (<div id="container">
          <div className="navbar">
            <div className="container">
              <div className="navbar-title">
                <a href="#" className="text-black">
                  { hash === '' || hash === '#/' || hash === '#' ?
                    <span>Gabriel J. Csapo</span>
                  :
                    <span>Main</span>
                  }
                </a>
              </div>
            </div>
          </div>
          <div id="container-content">
          { children }
          </div>
          <div className="navbar navbar-center">
              <div className="container text-center">
                <a href="https://www.github.com/gabrielcsapo" target="_blank" rel="noopener noreferrer" data-tooltip="@gabrielcsapo" className="btn btn-black tooltip-top">
                    <img style={{ display:"inline-block", height: "25px" }} src="./dist/coffee.svg"/>
                </a>
              </div>
          </div>
      </div>);
  }
}

Layout.propTypes = {
  children: PropTypes.array
};

export default Layout;
