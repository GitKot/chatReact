import {normalizedComments as defaultComments} from '../fixtures'
import { DELETE_ARTICL, ADD_COMMENT} from '../CONSTANTS'
import {arrToMap} from '../helpers'


export default (commentsState = arrToMap(defaultComments), action)=>{
    const {type, payload, randomId} = action
   console.log(commentsState)
    switch(type){
        
        case ADD_COMMENT:
        
        console.log(randomId, payload.comment)
        payload.comment.id=randomId // добавили id в новый commnt
        return {...commentsState, [randomId]: payload.comment  }
    }
    
    return commentsState
}