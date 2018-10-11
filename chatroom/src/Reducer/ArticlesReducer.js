import {normalizedArticles as defaultArticles} from '../fixtures'
import { DELETE_ARTICL, ADD_COMMENT, LOAD_OLL_ARTICLES, START, SUCCESS, FAIL, LOAD_ARTICLE, LOAD_COMMENTS} from '../CONSTANTS'
import {arrToMap} from  '../helpers'
import { Map, Record, OrderedMap } from 'immutable'

const ArticlRecord = Record({
    commentsLoaded: false,
    text: undefined,
    title: '',
    id: undefined,
    comments: [],
    loading: false,
    date:''
})


const ReduserState = new Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
}) 

const defaultState = new ReduserState()

export default (articleState = defaultState, action) => {
   
    const {type, payload, response, randomId} = action
    switch(type){
        case DELETE_ARTICL: 
            return articleState.deleteIn(['entities', payload.id])

        case ADD_COMMENT:
            return articleState.updateIn(['entities', payload.articleId, 'comments'], comments => comments.concat(randomId))


        case  LOAD_OLL_ARTICLES + START:
           
            return articleState.set('loading', true)

        case LOAD_OLL_ARTICLES+SUCCESS:
       
            return articleState
                    .set('entities', arrToMap(response, ArticlRecord))
                    .set('loading', false)
                    .set('loaded', true ) 


        case LOAD_ARTICLE + START:   
             return articleState.setIn(['entities', payload.id, 'loading'], true)

        case LOAD_ARTICLE + SUCCESS:   
           
             return articleState.setIn(['entities', payload.id], new ArticlRecord(payload.response))
        
        // case LOAD_COMMENTS:
        // console.log('payload.articleId', payload.articleId)
        //      return articleState
        //          .setIn(['entities', payload.articleId, 'commentsLoading'], false )
        //          .setIn(['entities', payload.articleId, 'commentsLoaded'], true)
    }
    return articleState
}


