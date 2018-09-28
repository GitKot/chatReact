import React, {Component} from 'react'
import CommentList from  './CommentList'


 class Article extends Component{
    state = {
        isOpen: true
    }
    
    render(){
      
        const {article} = this.props
        const {isOpen} = this.state
     
    return(
    <div>
        <h3>{article.title}</h3>
        <button onClick = {this.toggleOpen}>{isOpen? "Close": "Open"}</button>
        {this.getBody()}
    </div>
    )
}

getBody = () => {
    const {isOpen} = this.state
    const {article} = this.props
    if(isOpen) return (
       
         <section>{article.text}
        
         <CommentList article = {article}/>
         </section>
         )
}

toggleOpen = () => this.setState({
    isOpen: !this.state.isOpen
    })
}

export default  Article