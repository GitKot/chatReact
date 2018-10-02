import {normalizedArticles as defaultArticles} from '../fixtures'
import { DELETE_ARTICL, ADD_COMMENT} from '../CONSTANTS'
import {arrToMap} from  '../helpers'



    

export default (articleState = arrToMap(defaultArticles), action)=>{
    console.log(articleState)
    const {type, payload, randomId} = action
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
    }
    return articleState
}


