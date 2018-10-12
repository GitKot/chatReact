import React, {Component} from 'react'
import Comment from './Comments'
import toggleOpen from '../Decorators/toggleOpen'
import NewComment from './NewComment/NewComments'
import {loadComments} from '../AC/ACreators'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class CommentList extends Component {  
    static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        user: PropTypes.string
    }
   
    render(){
        const  {isOpen, toggleOpen} = this.props
        console.log("--------", this.context)
        return(
           <div>
               <div>User: {this.context.user}</div>
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
