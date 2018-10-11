import React, {Component} from 'react'
import CommentList from  '../CommentList'
import PropTypes from 'prop-types'

import { CSSTransitionGroup } from 'react-transition-group'
import './article.css'
import {connect} from 'react-redux'
import {deleteArticl} from '../../AC/ACreators'
import {loadArticle} from '../../AC/ACreators'
import Loader from '../loader'


 class Article extends Component{
     static propTypes = {
         id:PropTypes.string.isRequired,
         isOpen: PropTypes.bool.isRequired,
         //from connect
         article: PropTypes.shape({
             id:PropTypes.string.isRequired,
             title: PropTypes.string.isRequired,
             text: PropTypes.string
         })
     }
     
    componentDidMount(){
       const {loadArticle, article, id} = this.props
       
        if(!article || (!article.text && !article.loading))loadArticle(id)
        
    }

    
    render(){
      const {article, isOpen, toggleOpenArticl} = this.props
       if(!article) return null
     return(
        <div>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpenArticl}>{isOpen? "Close": "Open"}</button>
        <button onClick = {this.handlDelete}>delete me</button>
        <CSSTransitionGroup
          transitionName="article"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={400}
          transitionAppear={true}
           transitionAppearTimeout={500}>
            {this.getBody()}
            </CSSTransitionGroup>
     
         </div>
    )
}

getBody = () => {
    const {isOpen, id} = this.props
    const {article} = this.props
   

    if(!isOpen) return null
    if(article.loading) return <Loader/>
    if(isOpen) return (
         <div>{article.text}
         <CommentList article = {article} id ={id} />
         </div>
         )
}
handlDelete = () => {
    const {deleteArticl, article} =this.props
   
    deleteArticl(article.id)
}


}

export default  connect((state, ownProps) => {
    return{
    article: state.articles.entities.get(ownProps.id)
}}, { deleteArticl, loadArticle})(Article)