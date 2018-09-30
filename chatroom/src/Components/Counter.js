import React, {Component} from "react"
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {ACcounter} from '../AC/ACcounter'

class Counter extends Component {

    static propTypes = {
        counter:PropTypes.number
    }

    render(){
      console.log(this.props)
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick = {this.handleclick}>Count</button>
                
            </div>
        )
    }
    handleclick = () => {
      this.props.ACcounter()
    }
}


export default connect((state)=>({counter: state.count}), {ACcounter})(Counter)