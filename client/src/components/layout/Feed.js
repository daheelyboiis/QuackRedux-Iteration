import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getFeed, getPost } from '../../actions/postActions';
import * as actions from '../../actions/postActions';
import Logout from '../authorization/Logout.js';
import Post from './Post';
import Header from '../../header.js';



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

  addPost: () => {
    dispatch(actions.addPost())
  },
  upvote: (id, location) => {
    dispatch(actions.upvote(id, location))
  },
  downvote: (id, location) => {
    dispatch(actions.downvote(id, location))
  }
});



class Feed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFeed();
  }


  render() {
    console.log(this.props.feed.feed, 'this is the feed')
    // console.log(this.props.feed, '----Feed----');
    let allPosts = [];
    let posts = this.props.feed.feed;
    console.log('posts', posts);

    for (let i = 0; i < posts.length; i++) {
      var likesCount = 0;
      console.log(posts[i], 'figure this out')
      if (posts[i].likes) {
        likesCount = posts[i].likes.length;
      }
      let date = new Date(Date.parse(posts[i].date));
      let dateObject = new Date(Date.parse(date));
      let dateReadable = dateObject.toDateString();
      // We haven't placed dateReadable in the div yet (still working on layout UX), but it's ready to insert.
      allPosts.push(<Post location={i} id={this.props.feed.feed[i]._id} likesCount={likesCount} text={posts[i].text} tags={posts[i].tags} name={posts[i].name} upvote={this.props.upvote} downvote={this.props.downvote}/>)
    }

    // console.log(allPosts, '------all Posts ----')
    return (
      <div>
        <Header user={this.props.auth.user.name}/>
        <div className="feed-container">
          {allPosts}
          <input placeholder='Write question here'
            type='text'
          />
          <button type="submit" onClick={() => {this.props.addPost()}}> Add Post </button>
        </div>
      </div>
    )
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(Feed);
