import {createStore, applyMiddleware} from 'redux'
import Reducer from '../Reducer'
import logger from '../MidleWares/logger'
import  randomId from '../MidleWares/randomId'

const enhancer = applyMiddleware(logger, randomId)

const Store = createStore(Reducer, {}, enhancer )


export default Store