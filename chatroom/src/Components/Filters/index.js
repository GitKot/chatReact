import React, {Component} from 'react'
import Selected from './Select'
import DayPic from './DayPic'

class Filter extends Component {
    render(){
        return(
            <div>
                <DayPic/>
                <Selected {...this.props}/>
            </div>
        )
    }
}

export default Filter