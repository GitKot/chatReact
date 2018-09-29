import React, {Component} from 'react'

class Comment extends Component {
    static defaultProps={
        comments:[]
    }
    
    render(){
      

  
       
        return(
            <ul>
             {this.getCommentList()} 
             </ul>
        )
    }
    getCommentList = () => {
        const {comments} = this.props
        console.log("comments", comments.length)
      
        if (comments.length == 0) return <p>{"No Comments"}</p>

        return  comments.map((comment)=> <li key={comment.id}><b>by: {comment.user}</b><br/>{comment.text}</li>) 
        
    }
}
export default Comment