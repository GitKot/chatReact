import React, {Component} from 'react'
import {connect} from 'react-redux'


class Comment extends Component{

    render(){
        const {comment} = this.props
        return(
            <div>
               <div><b>by:</b>{comment.user}</div>
                <div>{comment.text}</div>
            </div>
        )
    }

}

export default connect((state, ownProps)=>({
    comment:state.commentsState.entities.get(ownProps.id)
}))(Comment)