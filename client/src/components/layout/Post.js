import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/postActions';
import { Link } from 'react-router-dom';




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
  // console.log(props, 'passed down to POST')
  // let expanded = false;
  // if(expanded) {
  //   return (
  //     <div>'
  //       <ExpandedPost asdfasgas/>
  //     </div>
  //   )

  // } 

<<<<<<< HEAD
//   return (
//     <div>
//       <div className="questionBox">
//       <button onClick={() => props.upvote(`${props.id}`, props.location)}><i className="fas fa-arrow-up" ></i></button>
//       <strong> {props.likesCount} </strong>
//       <button onClick={() => props.downvote(`${props.id}`, props.location)}><i className="fas fa-arrow-down" ></i></button>
//       <Link to={`/posts/${props.id}`}>
//       <span className='question'>{props.text}<br></br>{props.tags}<br></br>{props.name}<hr></hr></span>
//       </Link>
//       </div>
//     </div>
//   );
      
=======
  return (

    <div><Link to={{pathname: '/ExpandedPost', state:{id: props.id}}}>

      <div className="questionBox">
      <button onClick={() => props.upvote(`${props.id}`, props.location)}><i className="fas fa-arrow-up" ></i></button>
      <strong> {props.likesCount} </strong>
      <button onClick={() => props.downvote(`${props.id}`, props.location)}><i className="fas fa-arrow-down" ></i></button>
      <Link to={`/posts/${props.id}`}>
      <span className='question'>{props.text}<br></br>{props.tags}<br></br>{props.name}<hr></hr></span>
      </Link>
      </div>
    </div>
  );
>>>>>>> 91db45347cebe2ac9d94ae4a334c3b124f9ea468
};


export default Post;

