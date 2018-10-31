import React from 'react';

const PostButtonForm = (props) => {
  return (
    <div>
    <input id='searchTxt' contentEditable='true' placeholder="Write here" type='text' />
    <button onClick={() => {props.addPost(document.getElementById('searchTxt').value)}}>Add Post</button>
    </div>
  );
}

export default PostButtonForm;
