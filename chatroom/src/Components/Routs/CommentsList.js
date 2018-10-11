
import React from 'react'
import CommentsPaggination from './CommentsPaggination'
import {Redirect, Route} from 'react-router-dom'

function CommentsList ({match}){
    if(match.isExact) return <Redirect to ='/comments/1'/>
    return <Route path='/comments/:page' render = {getCommentsPaggination}/>
}

function getCommentsPaggination({match}){
    return <CommentsPaggination page = {match.params.page} />
}

export default CommentsList

