import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getFeed, getPost } from '../../actions/postActions';
import * as actions from '../../actions/postActions';
import Logout from '../authorization/Logout.js';
import Post from './Post';
import Header from '../../header.js';
import PostButtonForm from './postButtonForm';



const mapStateToProps = state => ({
  state: state,
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
  upvote: (id, location) => {
    dispatch(actions.upvote(id, location))
  },
  downvote: (id, location) => {
    dispatch(actions.downvote(id, location))
  },
  addPost: (input) => {
    dispatch(actions.addPost(input))
  },
  // changePostText: () => {
  //   dispatch(actions.changePostText())
  // }
});




class Feed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFeed();
  }


  render() {
    console.log(this.props.state, '----AllState----');
    let allPosts = [];
    let posts = this.props.feed;
    console.log('posts', posts);
    console.log(this.props.auth, '----this is state-----');


    for (let i = 0; i < posts.length; i++) {
      let likesCount = 0;
      if (posts[i].likes.length) {
        likesCount = posts[i].likes.length;
      }
      let date = new Date(Date.parse(posts[i].date));
      let dateObject = new Date(Date.parse(date));
      let dateReadable = dateObject.toDateString();
      // We haven't placed dateReadable in the div yet (still working on layout UX), but it's ready to insert.
      allPosts.push(<Post location={i} id={this.props.feed[i]._id} likesCount={likesCount} text={posts[i].text} tags={posts[i].tags} name={posts[i].name} upvote={this.props.upvote} downvote={this.props.downvote}/>)
    }
    // console.log(allPosts, '------all Posts ----')
    return (
      <div>
        <Header user={this.props.auth.user.name}/>
        <div className="feed-container">

          {/* <h3>{this.props.auth.user.name} successfully Logged in!</h3> */}
          {allPosts}

          <PostButtonForm
            addPost = {this.props.addPost}
          />
          <Logout />
        </div>
      </div>
    )
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(Feed);
