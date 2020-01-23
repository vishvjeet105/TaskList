import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-container-add">
          <Link className="link" to="add-task">
            ADD TASK
          </Link>
        </div>
        <div className="home-container-line" />
        <div className="home-container-taskinfo">No task added</div>
      </div>
    );
  }
}
export default Home;
