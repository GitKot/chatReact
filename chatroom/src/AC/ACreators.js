
import {INCREMENT, DELETE_ARTICL, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_COMMENT, LOAD_OLL_ARTICLES, LOAD_ARTICLE, START, SUCCESS, FAIL, LOAD_COMMENTS, LOAD_OLL_COMMENTS} from '../CONSTANTS'


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

export function loadArticle(id){
   
    return (dispatch) => {
        dispatch({
          type:LOAD_ARTICLE + START,
          payload: {id}
        })
        setTimeout(()=> {
            fetch(`/article/${id}`)
            .then(res=>  res.json() ) 
            .then(response => dispatch({
                type: LOAD_ARTICLE + SUCCESS,
                payload:{id, response}
            }))
            .catch(error => dispatch({
                type:LOAD_ARTICLE+FAIL,
                payload: {id, error}
            }))
        }, 1000)
    }
}


export function loadComments(articleId){
    console.log("loadComments")
        return (dispatch) => {
            setTimeout(()=> {
            fetch(`/comment?article=${articleId}`)
            .then(resp => resp.json())
            .then(resp => dispatch({
                type: LOAD_COMMENTS,
                payload: {articleId, resp}
            }))
            .catch(error => dispatch({
                type:LOAD_COMMENTS + FAIL,
                payload: {error}
            }))
        }, 500)
        }}

export function loadPaginComments(page){
    return(dispatch, getState) => {
        const {commentsState:{pagination}} = getState()
        if(pagination.getIn([page, 'loading']) || pagination.getIn([page, 'ids'])) return
    
    dispatch ({
        type:LOAD_OLL_COMMENTS,
        payload: {page},
        callAPI:`/comment?limit=5&offset=${(page-1)*5}`
    })}
 }
// export function loadArticle(id){
//     return {
//         type: LOAD_ARTICLE,
//         callAPI: `/article/${id}`
//     }
// }