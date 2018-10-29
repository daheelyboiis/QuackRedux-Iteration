import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getFeed, getPost } from '../../actions/postActions';
import * as actions from '../../actions/postActions';
import Logout from '../authorization/Logout.js';
import Post from './Post';



const mapStateToProps = state => ({
  auth: state.auth,
  feed: state.feed
});

const mapDispatchToProps = dispatch => ({
  getFeed: () => {
    dispatch(actions.getFeed())
  },
  getPost: () => {
    dispatch(actions.getPost())
  },
});


class Feed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFeed();
  }


  render() {
    console.log(this.props.feed, '----Feed----');
    let allPosts = [];
    let posts = this.props.feed;


    for (let i = 0; i < posts.length; i++) {
      let likesCount = 0;
      if (posts[i].likes.length) {
        likesCount = posts[i].likes.length;
      }
      let date = new Date(Date.parse(posts[i].date));
      let dateObject = new Date(Date.parse(date));
      let dateReadable = dateObject.toDateString();
      // We haven't placed dateReadable in the div yet (still working on layout UX), but it's ready to insert.
      allPosts.push(<Post id={this.props.feed[i]._id} likesCount={likesCount} text={posts[i].text} tags={posts[i].tags} name={posts[i].name} />)
    }
    console.log(allPosts, '------all Posts ----')
    return (
      <div className="feed-container">
        <h1> POSTS GO HERE </h1>
        <h3>{this.props.auth.user.name} successfully Logged in!</h3>
          <div>
            {allPosts}
            <Post
            feed = {this.props.feed}
            />
          </div>
        <Logout />
      </div>

    )
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(Feed);
