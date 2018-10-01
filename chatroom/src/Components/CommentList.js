import React, {Component} from 'react'
import Comment from './Comments'
import toggleOpen from '../Decorators/toggleOpen'
import NewComment from './NewComment/NewComments'

class CommentList extends Component {
    

    
    render(){
         const  {article, isOpen, toggleOpen} = this.props
         const {comments} = article
        console.log("comments777777",comments)
    
        const commentList = isOpen && <div><Comment id = {comments}/> <NewComment/> </div>
        return(
           <div>
               <button onClick = {toggleOpen}>{isOpen ? 'Close Comments':'Open Comments'}</button>
               {commentList}
              
           </div>
            
        )
    }


}

export default toggleOpen(CommentList)
