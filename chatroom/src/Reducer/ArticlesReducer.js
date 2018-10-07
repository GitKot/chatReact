import {normalizedArticles as defaultArticles} from '../fixtures'
import { DELETE_ARTICL, ADD_COMMENT, LOAD_OLL_ARTICLES} from '../CONSTANTS'
import {arrToMap} from  '../helpers'


export default (articleState = {}, action) => {
    console.log(articleState)
    const {type, payload, response, randomId} = action
    switch(type){
        case DELETE_ARTICL: 
            const tmpState = {...articleState}
            delete tmpState[payload.id]
            return tmpState

        case ADD_COMMENT:
            const article = articleState[payload.articleId]
            return {...articleState,
                [payload.articleId]: {...article, 
                    comments: ( article.comments || []).concat(randomId)
                }
            }

        case LOAD_OLL_ARTICLES:
            return arrToMap(response)
    }
    return articleState
}


