import React from 'react'
import {OrderedMap, Map} from 'immutable'

export const arrToMap=(array, DataRecord = Map) => array.reduce((acc, item) =>{
    return acc.set(item.id, new DataRecord(item))}, new OrderedMap({}) )

export function mapToArr(obj) {
    return obj.valueSeq().toArray()
}    