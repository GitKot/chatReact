import React, {Component} from 'react'
import {connect} from 'react-redux'
import {commentSelector} from '../Selectors'

class Comment extends Component {
    static defaultProps={
        // comments:[]
    }

    // componentWillUpdate(){
    //     console.log("update")
    // }
 render(){
             return(
            <ul>
             {this.getCommentList()} 
             </ul>
        )
    }
    getCommentList = () => {
        const {comments} = this.props
       console.log(comments)
      
        if (comments.length == 0) return <p>{"No Comments"}</p>

        return  comments.map((comment)=> <li key={comment.id}><b>by: {comment.user}</b><br/>{comment.text}</li>) 
        
    }
}



export default connect( (state, ownProps) => {
       
    return {comments: commentSelector(state, ownProps)}
}
     )(Comment)
