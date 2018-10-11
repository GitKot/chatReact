import {START, SUCCESS, FAIL} from '../CONSTANTS'

export default store => next => action => {
    const {callAPI, type, ...rest} = action
    if(!callAPI) return next(action)
    next({
        ...rest, type: type + START
    })

    setTimeout(() =>{
        console.log(3333)
          fetch(callAPI)
         .then(res => res.json())
         .then(response => next({...rest, type: type + SUCCESS, response}))
         .catch(error =>  next({...rest, type: type + FAIL, error})) 
    }, 1000)
}