
import {INCREMENT, DELETE_ARTICL} from '../CONSTANTS'

export function ACcounter(){
   return  {type: INCREMENT}
}

export function deleteArticl(id){
    return{
        type: DELETE_ARTICL,
        payload: {id}
    }
}