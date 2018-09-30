import React, {Component} from 'react'
import CommentList from  './CommentList'
import PropTypes from 'prop-types'
import toggleOpen from '../Decorators/toggleOpen'

import { CSSTransitionGroup } from 'react-transition-group'
import './article.css'

 class Article extends Component{
     static propTypes = {
         article: PropTypes.shape({
             id:PropTypes.string.isRequired,
             title: PropTypes.string.isRequired,
             text: PropTypes.string
         }).isRequired
     }
     
    
    
    render(){
      const {article, isOpen, toggleOpenArticl} = this.props
     return(
        <div>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpenArticl}>{isOpen? "Close": "Open"}</button>
        
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
    if(isOpen) return (
         <div>{article.text}
         <CommentList article = {article}/>
         </div>
         )
}


}

export default  Article