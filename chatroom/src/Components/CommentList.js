import React, {Component} from 'react'
import Comment from './Comments'
import toggleOpen from '../Decorators/toggleOpen'
import NewComment from './NewComment/NewComments'
import {loadComments} from '../AC/ACreators'
import {connect} from 'react-redux'

class CommentList extends Component {  
    
   
    render(){
        const  {isOpen, toggleOpen} = this.props
        return(
           <div>
               <button onClick = {toggleOpen}>{isOpen ? 'Close Comments':'Open Comments'}</button>
               {this.commentList()}
           </div>
        )
    }
    commentList = () =>  {
        const  {article, isOpen, loadComments, id} = this.props
        const {comments} = article
      
        loadComments(id)
        return isOpen && <div>
        <Comment id = {comments}/> <NewComment id = {article.id} /></div>}
}

export default connect(null, {loadComments})(toggleOpen(CommentList))
