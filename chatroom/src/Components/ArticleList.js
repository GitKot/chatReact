import React, {Component} from 'react'
import Article from './Article'
import toggleOpen from '../Decorators/toggleOpen'

class  ArticleList extends Component{
    
    render(){
    const {articles}  = this.props
    const articlElements = articles.map((articl) => <li key={articl.id}><Article article = {articl}
    isOpen = { articl.id === ( this.props.openArticlId  || this.props.articles[0].id)}
    toggleOpenArticl = {this.props.toggleOpenArticl(articl.id)}/></li>)

    return(
        <ul>
            {articlElements}
        </ul>
    )
    }
  
}

export default toggleOpen(ArticleList)