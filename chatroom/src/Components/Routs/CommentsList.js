
import React from 'react'
import CommentsPaggination from './CommentsPaggination'


function CommentsList ({match}){
    return <CommentsPaggination page = {match.params.page}/>
}

export default CommentsList

