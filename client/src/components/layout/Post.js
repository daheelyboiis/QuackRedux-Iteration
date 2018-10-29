import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';



const Post = (props) => {
  console.log(props, 'passed down to POST')
  return (
    <div><Link to={`/posts/${props.id}`}>
      <div className="questionBox">
      <i className="fas fa-arrow-up"></i>
      <strong> {props.likesCount} </strong>
      <i className="fas fa-arrow-down" ></i>
      <span className='question'>{props.text}<br></br>{props.tags}<br></br>{props.name}<hr></hr></span>
      </div>
      </Link>
      </div>
  );
}

export default Post;


 // allPosts.push(<div key={i} className="questionBox"> <i className="fas fa-arrow-up" key={i}></i> <strong> {likesCount} </strong><i className="fas fa-arrow-down" key={i}></i> <span className='question' key={i}>{posts[i].text}<br></br>{posts[i].tags}<br></br>{posts[i].name}<hr></hr></span></div>)
