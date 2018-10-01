import React, {Component} from 'react'
import {combineReducers} from 'redux'
import CounterReducer from './CounterReducer'
import articles from './ArticlesReducer'
import commentsState from './CommentsReducer'
import filters from './FilterReducer'

export default combineReducers ({
    count:CounterReducer,
    articles, filters, commentsState
})
