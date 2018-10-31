
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Post from './Post';
import Header from '../../header.js';
import * as actions from '../../actions/postActions';
import CreateComment from './CreateComment';
import Comment from './Comment';

// FeedItem should consist of an image (src contained in the data from the AJAX request)

const mapStateToProps = state => ({
    auth: state.auth,
    post: state.post,
  });
  
  const mapDispatchToProps = dispatch => ({
    getPost: (id) => {
      dispatch(actions.getPost(id))
    },
    addComment: (input, id) => {
      dispatch(actions.addComment(input, id))
    }
  });
  

class ExpandedPost extends Component {
    // put render logic here
    constructor(props){
        super(props)
    }
    
    
    componentWillMount(){
        // console.log(this.props, '------the props------');
        this.props.getPost(this.props.location.state.id);    
    }

    

    render (){
        console.log('here we are', this.props.post)
        let theText = this.props.post[0] == undefined ? '' : this.props.post[0].text
        let theComments = this.props.post[0] == undefined ? '' : this.props.post[0].comments
        let commentsArr = [];
        let theID = this.props.post[0] == undefined ? '' : this.props.post[0]._id;
        console.log(theID, 'This is the ID')
        
        for(let i = 0; i < theComments.length; i++){
          commentsArr.push(<Comment key={i} comment={theComments[i]}/>)
        }
        return(
          
          <div>
            <Header user={this.props.auth.user.name}/>
      <div 
      style={styles.container} 
      className="expandedpost"
      >
        <strong>{theText} </strong>
      </div>
      <div>
        {commentsArr}
      </div>
        <CreateComment id={theID} addComment={this.props.addComment} />
      </div>
      
      )
    };
  }



const styles = {
  container: {
    border: '1px solid black',
    height: 100,
    width: '100%',
    flex: 1,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpandedPost);