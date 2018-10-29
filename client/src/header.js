import React,{ Component } from "react";

import UserInfo from './components/userinfo.js';
import Logout from './components/authorization/Logout.js';
// import SearchBar from './components/searchbar.js';

class Header extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div>
        <div className='NavBar'>
          <UserInfo id='userinfo' user={this.props.user}/>
          <Logout id='logout'/>
        {/* <SearchBar /> */}
        </div>
        <h1 id='title'>FullQuack</h1>
      </div>
    )
  }
}

export default Header;