import React, {Component} from 'react'
import Article from './Article'


export default function ArticleList({articles}) {
    const articlElements = articles.map((articl) => <li key={articl.id}><Article article = {articl}/></li>)
    return(
        <ul>
            {articlElements}
            
        </ul>
    )

}