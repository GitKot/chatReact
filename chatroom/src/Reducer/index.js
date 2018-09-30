import React, {Component} from 'react'
import {combineReducers} from 'redux'
import CounterReducer from './CounterReducer'
import articles from './ArticlesReducer'


export default combineReducers ({
    count:CounterReducer,
    articles
})
