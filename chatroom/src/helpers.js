import React from 'react'

export const arrToMap=(array) => array.reduce((acc, articl) =>{
    acc[articl.id] = articl
    return acc
    }, {})

export function mapToArr(obj) {
    return Object.keys(obj).map(id => obj[id])
}    