import React, {Component} from 'react'
import Article from './Articl'
import WrappedArticl from '../Decorators/ArticlDecorator'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../Selectors/index'
import {loadallArticles} from '../AC/ACreators'
import Loader from './loader'
import {loadComments} from '../AC/ACreators'

class  ArticleList extends Component{
    
    componentDidMount(){
        const {loaded, loading, loadallArticles, loadComments} = this.props
        loadComments()
        if(!loaded || !loading) loadallArticles()
    }

    render(){
        const {articles, loading, openArticlId}  = this.props
        
        if (loading) return <Loader/>
    const articlElements = articles.map((articl) => <li key={articl.id}><Article article = {articl}
    isOpen = { articl.id === openArticlId }
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
     articles: filtratedArticlesSelector(state),
     loading: state.articles.loading,
     loaded: state.articles.loaded,
     
 }
 }, {loadallArticles, loadComments} ) (WrappedArticl(ArticleList))