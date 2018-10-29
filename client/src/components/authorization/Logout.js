import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import classnames from 'classnames';
import { logoutUser } from '../../actions/authActions';

class Logout extends Component {
  // constructor() {
  //   super();

  // }

  render() {
    // const { errors } = this.state;

    return (
      <div>
        <button onClick={() => this.props.logout()}><Link to='/'>Logout</Link></button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  logout: function() {dispatch(logoutUser())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
