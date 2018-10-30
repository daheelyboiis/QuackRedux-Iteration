import React from 'react';
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom';
import * as actions from '../../actions/postActions';



const Post = (props) => {
  console.log(props.feed.feed, 'passed down to POST')
  return (
    <div>
      {props.feed.feed.map((post)=> {
        return (
          <div className="questionBox" key={post._id}>
          <ul className='question' key={post._id}>
          <li> {post.text}</li> </ul>
          <br></br>
          {post.tags}
          <br></br>
          {post.name}
          <i className="fas fa-arrow-up"></i>
          <strong> {props.likesCount} </strong>
          <i className="fas fa-arrow-down"></i>
          <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

export default Post;

