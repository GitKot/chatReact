import React, {Component} from 'react'
import Article from './Articl'
import WrappedArticl from '../Decorators/ArticlDecorator'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../Selectors/index'
import {loadallArticles} from '../AC/ACreators'

class  ArticleList extends Component{
    
    componentDidMount(){
        this.props.loadallArticles()
    }

    render(){
        const {articles}  = this.props
    const articlElements = articles.map((articl) => <li key={articl.id}><Article article = {articl}
    isOpen = { articl.id === this.props.openArticlId }
    toggleOpenArticl = {this.props.toggleOpenArticl(articl.id)}/></li>)

    return(
        <ul>
            {articlElements}
        </ul>
    )
    }
  
}


export default connect( (state) =>{
    
 return {
     articles: filtratedArticlesSelector(state)
 }
 }, {loadallArticles} ) (WrappedArticl(ArticleList))