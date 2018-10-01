import React, {Component} from 'react'
import Selected from './Select'
import DateRange from './DateRange'

class Filter extends Component {
    render(){
        return(
            <div>
                <DateRange/>
                <Selected />
            </div>
        )
    }
}

export default Filter