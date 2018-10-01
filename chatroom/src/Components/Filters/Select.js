import React, {Component} from 'react'
import Select from 'react-select'
import {selectedFilter} from '../../AC/ACcounter'
import {connect} from 'react-redux'

class Selected extends Component {
  
    render(){
        console.log('selected',this.props)
        const options = this.props.articles.map(articl => ({
            label: articl.title,
            value: articl.id
        }))
        return(
            <Select 
            options={options} 
            value={this.props.selected} 
            onChange = {this.selection} 
            isMulti />
        )
    }
    selection = (selected) => this.props.selectedFilter(selected.map(option => option))
    }


export default connect ((state)=>({
                        selected: state.filters.selected,
                        articles: state.articles }),
                        {selectedFilter})(Selected) 