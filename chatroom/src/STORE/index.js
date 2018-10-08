import {createStore, applyMiddleware} from 'redux'
import Reducer from '../Reducer'
import logger from '../MidleWares/logger'
import  randomId from '../MidleWares/randomId'
import  api from '../MidleWares/api'
import thunk from 'redux-thunk'


const enhancer = applyMiddleware(thunk, logger,api, randomId)

const Store = createStore(Reducer, {}, enhancer )


export default Store