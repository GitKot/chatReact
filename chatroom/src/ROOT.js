import React from 'react'
import PtopTypes from "prop-types"
import App from './Components/App'
import {Provider} from 'react-redux'
import store from './STORE'

function Root (props){
    return (
        <Provider store ={store} ><App/></Provider>
    )
   
}
Root.propTypes ={

}

export default Root