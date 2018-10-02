import React from 'react'
import {createSelector} from "reselect"

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles
const idGetter = (state, props) => props.id
const commentsGetter = (state, props) => state.commentsState



export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const { selected, dateRange: {from, to} } = filters

       return  Object.values(articles).filter((article, index) => {
       
         const published = Date.parse(article.date)
         const fromPars = Date.parse(from)
         const toPars = Date.parse(to)
     
         
         return (!selected.length || selected.some(obj => obj.value === article.id)) && 
         (!from || !to || (published > fromPars && published < toPars))
     })
})

export const commentSelector = createSelector(commentsGetter, idGetter, (comments, id) => {
    
    const f =()=>{
        let arr = []
         for(let i=0; i<id.length; i++) {
           arr.push(comments[id[i]]) 
         }
         return arr
    }
    return f()
} 
)


// comments.filter(comentobj=>{
//     for(let i=0; i<=id.length; i++){
//     if( comentobj.id === id[i]) return true
//     }    
// })