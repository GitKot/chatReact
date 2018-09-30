import React, {Component} from 'react'
import Article from './Articl'
import WrappedArticl from '../Decorators/ArticlDecorator'

import {connect} from 'react-redux'


class  ArticleList extends Component{
    
    render(){
    console.log('this',this.props);
    
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

export default connect((state) => ({articles: state.articles}) )(WrappedArticl(ArticleList))