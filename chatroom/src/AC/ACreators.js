
import {INCREMENT, DELETE_ARTICL, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_COMMENT, LOAD_OLL_ARTICLES} from '../CONSTANTS'


export function ACcounter(){
   return  {type: INCREMENT}
}

export function deleteArticl(id){
    return{
        type: DELETE_ARTICL,
        payload: {id}
    }
}

export function changeDateFilter(dateRange){
    
    return{
        type:CHANGE_DATE_RANGE,
        payload: {dateRange}
    }
}

export function selectedFilter(selected){
    return{
        type:CHANGE_SELECTION,
        payload: {selected}
    }
}

export function addComment(comment, articleId){
    return {
        type:ADD_COMMENT,
        payload: {comment, articleId},
        generateId: true
    }
}

export function loadallArticles (){
    return{
        type:LOAD_OLL_ARTICLES,
        callAPI: "/article"

    }
}