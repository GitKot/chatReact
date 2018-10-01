import {normalizedArticles as defaultArticles} from '../fixtures'
import { DELETE_ARTICL} from '../CONSTANTS'

export default (articleState = defaultArticles, action)=>{
    const {type, payload} = action
    switch(type){
        case DELETE_ARTICL: return articleState.filter(articl => articl.id !== payload.id )
    }
    
    return articleState
}