import React from 'react';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (<div id="container">
          <div className="navbar">
            <div className="container">
              <div className="navbar-title">
                <a href="#" className="text-black">
                  <span>Gabriel J. Csapo</span>
                </a>
              </div>
            </div>
          </div>
          <div>
          { children }
          </div>
          <div className="navbar navbar-bottom navbar-center" style={{ paddingTop: "2px" }}>
              <div className="container text-center">
                <a href="https://www.github.com/gabrielcsapo" target="_blank" rel="noopener noreferrer" data-tooltip="@gabrielcsapo" className="btn btn-black tooltip-top">
                    <img style={{ display:"inline-block", height: "25px" }} src="./dist/coffee.svg"/>
                </a>
              </div>
          </div>
      </div>);
  }
}

export default Layout;
