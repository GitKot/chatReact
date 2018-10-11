import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Comment from './Comment'
import Loader from '../loader'
import {loadPaginComments} from '../../AC/ACreators'

class CommentsPaggination extends Component {

    componentWillMount(){
        this.props.loadPaginComments(this.props.page)
    }

    componentWillReceiveProps({page, loadPaginComments}){
        loadPaginComments(page)
    }
    render(){
        const {total} = this.props
        if(!total) return <Loader/>
        return(
            <div>
                {this.getCommentsItems()}
                {this.getPagination()}
            </div>
        )
    }
    getCommentsItems(){
        const {comments, loading} = this.props
        console.log('________',comments, loading )
        if(loading || !comments) return <Loader/>
        console.log('________',comments, loading )
        const CommentsItems = comments.map(id => <li key= {id}><Comment id={id}/></li>)
        return <ul>{CommentsItems}</ul>
    }

    getPagination(){
        const {total} =  this.props
        const items = []
        for(let i = 1; i <= Math.floor((total-1)/5)+1; i++){
            items.push(<span key={i}><NavLink to={`/comments/${i}`} activeStyle = {{color:'red'}}>/{i}</NavLink></span>)
        }
        return items
    }
}


export default connect((state, {page}) => {
    const {total, pagination} = state.commentsState
    return{
        total,
        loading:pagination.getIn([page, 'loading']),
        comments:pagination.getIn([page, "ids"])
    }
}, {loadPaginComments})(CommentsPaggination)