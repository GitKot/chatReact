import React, {Component} from 'react'
import CommentList from  '../CommentList'
import PropTypes from 'prop-types'
import toggleOpen from '../../Decorators/toggleOpen'
import { CSSTransitionGroup } from 'react-transition-group'
import './article.css'
import {connect} from 'react-redux'
import {deleteArticl} from '../../AC/ACreators'
import {loadArticle} from '../../AC/ACreators'
import Loader from '../loader'


 class Article extends Component{
     static propTypes = {
         article: PropTypes.shape({
             id:PropTypes.string.isRequired,
             title: PropTypes.string.isRequired,
             text: PropTypes.string
         }).isRequired
     }
     
    componentWillReceiveProps({isOpen, loadArticle, article}){
       
        if( isOpen && !article.text && !article.loading )loadArticle(article.id)
        
    }

    
    render(){
      const {article, isOpen, toggleOpenArticl} = this.props
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
    const {isOpen} = this.props
    const {article} = this.props
  

    if(!isOpen) return null
    if(article.loading) return <Loader/>
    if(isOpen) return (
         <div>{article.text}
         <CommentList article = {article}/>
         </div>
         )
}
handlDelete = () => {
    const {deleteArticl, article} =this.props
   
    deleteArticl(article.id)
}


}

export default  connect(null, { deleteArticl, loadArticle})(Article)