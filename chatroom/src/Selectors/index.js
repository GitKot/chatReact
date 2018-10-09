import React from 'react'
import {createSelector} from "reselect"
import {mapToArr} from '../helpers'
const filtersGetter = state => state.filters
const articlesGetter = state => state.articles.entities
const idGetter = (state, props) => props.id
const commentsGetter = (state, props) => state.commentsState.entities



export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const { selected, dateRange: {from, to} } = filters
  

       return  mapToArr(articles).filter((article, index) => {
      
         const published = Date.parse(article.date)
         const fromPars = Date.parse(from)
         const toPars = Date.parse(to)
         
         
         return (!selected.length || selected.some(obj => obj.value === article.id)) && 
         (!from || !to || (published > fromPars && published < toPars))
     })
})

export const commentSelector = createSelector(commentsGetter, idGetter, (comments, id) => {
   
    console.log(11111111111,mapToArr(comments), id, 11111111111)
    const f =()=>{
        let arr = []
         for(let i=0; i<id.length; i++) {
           arr.push(mapToArr(comments).find(comment => comment.id == id[i] )) 
         }
         console.log('arrrr',arr)
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