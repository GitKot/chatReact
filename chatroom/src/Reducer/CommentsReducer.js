import {normalizedComments as defaultComments} from '../fixtures'
import { DELETE_ARTICL, ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL,LOAD_OLL_COMMENTS } from '../CONSTANTS'
import {arrToMap} from '../helpers'
import { Map, Record, OrderedMap } from 'immutable'



const CommentsRecord = Record({
    text: null,
    user: '',
    id: null,
   
})

const ComentsState = new Record({
    pagination:new Map({}),
    entities: new OrderedMap({}),
    total: null
}) 


const defaultCommet = new ComentsState()

export default (commentsState = defaultCommet, action)=>{
    const {type, payload, randomId, response} = action
    

    switch(type){
        case ADD_COMMENT:
             return commentsState.setIn(['entities', randomId],
             new CommentsRecord({...payload.comment, id: randomId }))
            

        case LOAD_COMMENTS:
            return  commentsState.update('entities',  (entities)=> entities.merge(arrToMap(payload.resp, CommentsRecord)))

        case LOAD_OLL_COMMENTS + START:
            console.log(LOAD_OLL_COMMENTS + START)
            return commentsState
            .setIn(['pagination', payload.page, 'loading' ], true)
            

        
        case LOAD_OLL_COMMENTS + SUCCESS:
        console.log(LOAD_OLL_COMMENTS + SUCCESS, response.records, payload.page)
            return  commentsState
            .set('total', response.total)
            .mergeIn(['entities'], arrToMap(response.records, CommentsRecord))
            .setIn(['pagination', payload.page, 'ids' ],response.records.map(comment => comment.id))
            .setIn(['pagination', payload.page, 'loading'], false)
            
           
        
       
          
    }
    return commentsState
}

