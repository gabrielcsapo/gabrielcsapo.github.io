import React from 'react';

class Main extends React.Component {
  render() {
    return (<div style={{ width: "100%", top: "50%", transform: "translateY(-50%)", position: "absolute" }}>
      <a href="https://twitter.com/gabriel_csapo" target="_blank" rel="noopener noreferrer" style={{ marginRight: "5px" }} data-tooltip="Twitter" className="btn btn-white tooltip-bottom">
        <i className="fa fa-twitter"></i>
      </a>
      <a href="https://www.linkedin.com/in/gabrielcsapo" target="_blank" rel="noopener noreferrer" style={{ marginRight: "5px"}} data-tooltip="Linkedin" className="btn btn-white tooltip-top">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="https://www.github.com/gabrielcsapo" target="_blank" rel="noopener noreferrer" data-tooltip="Github" className="btn btn-white tooltip-bottom">
        <i className="fa fa-github"></i>
      </a>
      <a href="#projects" data-tooltip="Projects" className="btn btn-white tooltip-top">
        <i className="fa fa-map-signs"></i>
      </a>
      <a href="./dist/gabriel_csapo.pdf" target="_blank" rel="noopener noreferrer" data-tooltip="Resume" className="btn btn-white tooltip-bottom">
        <i className="fa fa-suitcase"></i>
      </a>
    </div>);
  }
}

export default Main;
