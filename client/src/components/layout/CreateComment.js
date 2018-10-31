import React from 'react';


const CreateComment = (props) => {
  return (
    <div>
    <input id='searchTxt' contentEditable='true' placeholder="Write here" type='text'/>
    <button onClick={() => props.addComment(document.getElementById('searchTxt').value, props.id)}>Add Comment</button>
    </div>
  );
}

export default CreateComment;