import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticlList from '../ArticleList'
import Article from '../Articl'
import {Route} from 'react-router-dom'

class Articles extends Component{
    static proptTypes ={

    }
    render(){
        return (
            <div>
                <ArticlList/>
                <Route path ='/articles' render = {this.getSelect} exact/>
                <Route path = '/articles/:id' render = {this.getArticle}/>
            </div>
        )

    }
    getArticle=({match}) => {
        const {id} = match.params
        console.log('______', match, match.isExact)
       
        return <Article id = {id} isOpen key = {id}/>
    }
    getSelect = ({match}) =>{
        return <h2>Please select you article</h2>
    }
}

export default Articles