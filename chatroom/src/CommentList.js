import React, {Component} from 'react'
import Comment from './Comments'

class CommentList extends Component {

    state = {
        openComent: false
    }
    render(){
         const  {article} = this.props
         const comments = article.comments || [1]
         const openComent = this.state.openComent
    
        const commentList = openComent && <Comment comments = {comments} /> 
        return(
           <div>
               <button onClick = {this.togglComments}>{openComent? 'Close':'Open'}</button>
               {commentList}
           </div>
            
        )
    }
    togglComments= () => this.setState({
        openComent : !this.state.openComent
    })

}

export default CommentList
