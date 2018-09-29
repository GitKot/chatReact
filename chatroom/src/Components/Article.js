import React, {Component} from 'react'
import CommentList from  './CommentList'
import PropTypes from 'prop-types'
import toggleOpen from '../Decorators/toggleOpen'

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
    <div ref = {(node) => console.log(node)}>
        <h3>{article.title}</h3>
        <button onClick = {toggleOpenArticl}>{isOpen? "Close": "Open"}</button>
        {this.getBody()}
    </div>
    )
}

getBody = () => {
    const {isOpen} = this.props
    const {article} = this.props
    if(isOpen) return (
       
         <section>{article.text}
        
         <CommentList article = {article}/>
         </section>
         )
}


}

export default  Article