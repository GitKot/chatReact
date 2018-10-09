import {normalizedComments as defaultComments} from '../fixtures'
import { DELETE_ARTICL, ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL, } from '../CONSTANTS'
import {arrToMap} from '../helpers'
import { Map, Record, OrderedMap } from 'immutable'


const CommentsRecord = Record({
    text: undefined,
    user: '',
    id: undefined,
    loading: false,
})

const ComentsState = new Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
}) 


const defaultCommet = new ComentsState()

export default (commentsState = defaultCommet, action)=>{
    const {type, payload, randomId} = action
    

    switch(type){
        case ADD_COMMENT:
            payload.comment.id=randomId // добавили id в новый commnt
            return {...commentsState, [randomId]: payload.comment  }

        case LOAD_COMMENTS + START:
       
            return  commentsState
            .set('loaded', false)
            .set('loading', true)

        case LOAD_COMMENTS:
        console.log("responseSUCCESS", payload.resp.records)
            return  commentsState
            .set('entities', arrToMap(payload.resp.records, CommentsRecord))
            .set('loaded', true)
            .set('loading', false)
    }
    return commentsState
}

