import React from 'react';
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom';



const Comment = (props) => {
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
    <div style={styles.container}>
       <span className='question'> {props.comment.text}</span>
    </div>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid black',
    height: 100,
    width: '100%',
    flex: 1,
  },
};


 export default Comment;


    
    
    