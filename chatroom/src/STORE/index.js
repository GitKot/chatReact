import {createStore, applyMiddleware} from 'redux'
import Reducer from '../Reducer'
import logger from '../MidleWares/logger'
import  randomId from '../MidleWares/randomId'
import  api from '../MidleWares/api'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import history from '../history'

const enhancer = applyMiddleware(routerMiddleware(history), thunk, logger,api, randomId)

const Store = createStore(Reducer, {}, enhancer )


export default Store