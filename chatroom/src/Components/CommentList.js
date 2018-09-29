import React, {Component} from 'react'
import Comment from './Comments'
import toggleOpen from '../Decorators/toggleOpen'

class CommentList extends Component {
    

    
    render(){
         const  {article, isOpen, toggleOpen} = this.props
         const comments = article.comments
         
    
        const commentList = isOpen && <Comment comments = {comments} /> 
        return(
           <div>
               <button onClick = {toggleOpen}>{isOpen ? 'Close Comments':'Open Comments'}</button>
               {commentList}
           </div>
            
        )
    }


}

export default toggleOpen(CommentList)
