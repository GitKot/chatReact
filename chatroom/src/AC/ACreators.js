
import {INCREMENT, DELETE_ARTICL, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_COMMENT} from '../CONSTANTS'


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

