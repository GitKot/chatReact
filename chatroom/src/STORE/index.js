import {createStore, applyMiddleware} from 'redux'
import Reducer from '../Reducer'
import logger from '../MidleWares/logger'

const enhancer = applyMiddleware(logger)

const Store = createStore(Reducer, {}, enhancer )


export default Store