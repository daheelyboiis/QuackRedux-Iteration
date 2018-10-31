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
        {props.comment.text}
    </div>
  );
};

const styles = {

}


 export default Comment;


    
    
    