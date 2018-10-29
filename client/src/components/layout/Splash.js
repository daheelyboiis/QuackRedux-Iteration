import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Splash extends Component {
  render() {
    return (
      <div className="splash-container">
        <h2>Login to quack </h2>
        <hr />
        <Link to="/register" className = "btn btn-lg btn-light" id="register">
          Register
        </Link>
        <Link to="/login" className = "btn btn-lg btn-light" id="login">
          Login
        </Link>
      </div>

    )
  }
}

export default Splash;