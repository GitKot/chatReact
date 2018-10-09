import {normalizedComments as defaultComments} from '../fixtures'
import { DELETE_ARTICL, ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL, } from '../CONSTANTS'
import {arrToMap} from '../helpers'
import { Map, Record, OrderedMap } from 'immutable'


const CommentsRecord = Record({
    text: undefined,
    user: '',
    id: undefined,
   
})

const ComentsState = new Record({
   
    entities: new OrderedMap({})
}) 


const defaultCommet = new ComentsState()

export default (commentsState = defaultCommet, action)=>{
    const {type, payload, randomId} = action
    

    switch(type){
        case ADD_COMMENT:
             return commentsState.setIn(['entities', randomId],
             new CommentsRecord({...payload.comment, id: randomId }))
            

        case LOAD_COMMENTS:
        console.log("responseSUCCESS", payload.resp)
            return  commentsState.update('entities',  (entities)=> entities.merge(arrToMap(payload.resp, CommentsRecord)))
          
    }
    return commentsState
}

