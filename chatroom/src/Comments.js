import React, {Component} from 'react'

class Comment extends Component {
    
    
    render(){
       const {comments} = this.props
        console.log("comments", comments)

        const commentList = comments.map((comment , index)=> <li key={comment.id || index}>{comment.text || "No Comments"}</li> )
       
        return(
            <ul>
             {commentList} 
             </ul>
        )
    }
}
export default Comment