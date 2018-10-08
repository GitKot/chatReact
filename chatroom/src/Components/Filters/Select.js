import React, {Component} from 'react'
import Select from 'react-select'
import {selectedFilter} from '../../AC/ACreators'
import {connect} from 'react-redux'
import {mapToArr} from '../../helpers'
class Selected extends Component {
  
    render(){
     
        const {articles} = this.props
        const arrArticls = mapToArr(articles.entities)

        
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