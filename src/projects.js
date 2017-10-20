import React from 'react';

class Projects extends React.Component {
  render() {
    const projects = [{
      "name": "bluse",
      "description": "⚗️ blend and fuse data with ease"
    }, {
      "name": "build.sh",
      "description": "🔨 run and visualize the build process"
    }, {
      "name": "deploy.sh",
      "description": "☁️ continuous deployment services"
    }, {
      "name": "git-timesince",
      "description": "⏰ a simple extension of git that shows the time since the last commit"
    }, {
      "name": "git-unstaged",
      "description": "🎭 Get all unstaged git repos in a folder"
    }, {
      "name": "json-ex",
      "description": "Extends JSON to be able to serialize and deserialize more than just basic primitives"
    }, {
      "name": "lcov-server",
      "description": "🎯 A simple lcov server & cli parser"
    }, {
      "name": "starbuck",
      "description": "📦 NPM dependency tracking server"
    }];

    return (<div style={{ width: "80%", padding: "10px", margin: "0 auto", paddingBottom: "100px" }}>
      <h3> Projects </h3>
      <small> These are a few projecst that I am passionate about at the moment, I have a few more that can be found <a href="https://github.com/gabrielcsapo">here</a></small>
      <br/>
      <br/>
      <ul className="list">
        { projects.map((project, i) => {
          const { description, name } = project;

          return (<li key={`${name}/${i}`} className="list-item">
            <a href={ `https://github.com/gabrielcsapo/${name}` }>
              <h3 style={{ 'padding': 0, 'margin': 0 }}>{ name }</h3>
              <small>{ description }</small>
            </a>
          </li>);
        })}
      </ul>
    </div>);
  }
}

export default Projects;
