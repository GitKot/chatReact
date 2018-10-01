import {normalizedComments as defaultComments} from '../fixtures'
import { DELETE_ARTICL} from '../CONSTANTS'

const commentMap = defaultComments.reduce((acc, comment) =>{
    acc[comment.id] = comment
    return acc
    }, {})

export default (commentsState = commentMap, action)=>{
    const {type, payload} = action
    switch(type){
        case DELETE_ARTICL: return commentsState.filter(articl => articl.id !== payload.id )
    }
    
    return commentsState
}