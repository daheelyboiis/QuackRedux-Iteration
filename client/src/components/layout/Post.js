import React from 'react';
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom';



const Post = (props) => {
  // console.log(props, 'passed down to POST')
  // let expanded = false;
  // if(expanded) {
  //   return (
  //     <div>'
  //       <ExpandedPost asdfasgas/>
  //     </div>
  //   )

  // } 

  return (
    <div>
      <div className="questionBox">
      <button onClick={() => props.upvote(`${props.id}`, props.location)}><i className="fas fa-arrow-up" ></i></button>
      <strong> {props.likesCount} </strong>
      <button onClick={() => props.downvote(`${props.id}`, props.location)}><i className="fas fa-arrow-down" ></i></button>
      <Link to={{pathname: '/ExpandedPost', state:{id: props.id}}}>
      <span className='question'>{props.text}<br></br>{props.tags}<br></br>{props.name}<hr></hr></span>
      </Link>
      </div>
    </div>
  );
};



 export default Post;
 