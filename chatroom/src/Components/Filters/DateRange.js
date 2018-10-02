 import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import {changeDateFilter} from '../../AC/ACreators'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    handleDayClick = (day) => {
       
        const { changeDateFilter, range } = this.props
        changeDateFilter(DateUtils.addDayToRange(day, range))
    }

    render() {
        const { from, to } = this.props.range;
       
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                initialMonth={new Date(2016, 5)}
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    range: state.filters.dateRange
}), { changeDateFilter })(DateRange)