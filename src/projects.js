import React from 'react';

class Projects extends React.Component {
  render() {
    const projects = process.projects;

    return (<div style={{ width: "80%", padding: "10px", margin: "0 auto", paddingBottom: "25px" }}>
      <h3> Projects </h3>
      <small> These are a few projecst that I am passionate about. </small>
      <br/>
      <br/>
      <ul className="list" style={{ width: 'auto' }}>
        { projects.map((project, i) => {
          const { description, name, homepage, html_url, topics, stars, forks } = project;

          return (<li key={`${name}/${i}`} className="list-item text-left">
            <a href={ homepage || html_url }>
              <span style={{ 'padding': 0, 'margin': 0 }}>
                { name }
                <small className="text-black" style={{ fontWeight: 300 }}>
                &nbsp;&nbsp;{ description }
                </small>
              </span>
            </a>

            <div className="badge badge-white" style={{ fontWeight: 100 }}>
              { topics.join(', ') }
            </div>
          </li>);
        })}
      </ul>
    </div>);
  }
}

export default Projects;
