import React, {Component} from 'react'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../Selectors/index'
import {loadallArticles} from '../AC/ACreators'
import Loader from './loader'
import {NavLink, Route} from 'react-router-dom'

class  ArticleList extends Component{
    
    componentDidMount(){
        const {loaded, loading, loadallArticles, loadComments} = this.props
        
        if(!loaded && !loading) loadallArticles()
    }

    render(){
        const {articles, loading}  = this.props
        
    if (loading) return <Loader/>

    const articlElements = articles.map((articl) => <li key={articl.id}>
    <NavLink to={`/articles/${articl.id}`} activeStyle ={{color:'red'}}>
    {articl.title}
    </NavLink>
    {/* <Article article = {articl}
    isOpen = { articl.id === openArticlId }
    toggleOpenArticl = {this.props.toggleOpenArticl(articl.id)}/> */}
    
    </li>)

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
     
 }}, {loadallArticles} ) (ArticleList)