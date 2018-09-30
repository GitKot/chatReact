import React, {Component} from 'react'
import Select from 'react-select'

class Selected extends Component {
    state ={
        selection:null
    }
    render(){
        console.log(this.props.articles)
        const options = this.props.articles.map(articl => ({
            label: articl.title,
            value: articl.id
        }))
        return(
            <Select options={options} value={this.state.selection} onChange = {this.selection} isMulti />
        )
    }
    selection = (selection) => {
        this.setState({selection})
    }
}

export default Selected 