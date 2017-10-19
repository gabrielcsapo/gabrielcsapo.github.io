import 'psychic-ui/dist/psychic-min.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import React from 'react';
import { render } from 'react-dom';

class Main extends React.Component {
  render() {
    return (<div id="container">
          <div className="navbar">
            <div className="container">
              <div className="navbar-title">
                <span>Gabriel J. Csapo</span>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", top: "50%", transform: "translateY(-50%)", position: "absolute" }}>
            <a href="https://twitter.com/gabriel_csapo" target="_blank" rel="noopener noreferrer" style={{ marginRight: "5px" }} data-tooltip="Twitter" className="btn btn-white tooltip-bottom">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/gabrielcsapo" target="_blank" rel="noopener noreferrer" style={{ marginRight: "5px"}} data-tooltip="Linkedin" className="btn btn-white tooltip-top">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://www.github.com/gabrielcsapo" target="_blank" rel="noopener noreferrer" data-tooltip="Github" className="btn btn-white tooltip-bottom">
              <i className="fa fa-github"></i>
            </a>
            <a href="./dist/gabriel_csapo.pdf" target="_blank" rel="noopener noreferrer" data-tooltip="Resume" className="btn btn-white tooltip-top">
              <i className="fa fa-suitcase"></i>
            </a>
          </div>
          <div className="navbar navbar-bottom navbar-center">
              <div className="container text-center">
                <a href="https://www.github.com/gabrielcsapo" target="_blank" rel="noopener noreferrer" data-tooltip="@gabrielcsapo" className="btn btn-black tooltip-top">
                    <img style={{ display:"inline-block", height: "25px" }} src="./dist/coffee.svg"/>
                </a>
              </div>
          </div>
      </div>);
  }
}

render(<Main/>, document.querySelector('#root'));
