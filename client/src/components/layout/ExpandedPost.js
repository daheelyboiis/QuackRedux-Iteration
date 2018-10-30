
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Post from './Post';
import Header from '../../header.js';
import * as actions from '../../actions/postActions';

// FeedItem should consist of an image (src contained in the data from the AJAX request)

const mapStateToProps = state => ({
    auth: state.auth,
    post: state.post,
  });
  
  const mapDispatchToProps = dispatch => ({
    getPost: (id) => {
      dispatch(actions.getPost(id))
    },
  });
  

class ExpandedPost extends Component {
    // put render logic here
    constructor(props){
        super(props)
    }
    
    
    componentDidMount(){
        // console.log(this.props, '------the props------');
        this.props.getPost(this.props.location.state.id);
        
    }

    

    render (){
        console.log('here we are', this.props.post)
        let theText = this.props.post[0] == undefined ? '' : this.props.post[0].text
        return(
      <div 
      style={styles.container} 
      className="expandedpost"
      >
        {theText} 
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