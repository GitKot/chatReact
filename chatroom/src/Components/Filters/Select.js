import React, {Component} from 'react'
import Select from 'react-select'
import {selectedFilter} from '../../AC/ACreators'
import {connect} from 'react-redux'

class Selected extends Component {
  
    render(){
     
        const {articles} = this.props
        const arrArticls = Object.values(articles)

        
        const options = arrArticls.map(articl => ({
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