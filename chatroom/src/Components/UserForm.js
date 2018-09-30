import React, {Component} from 'react'

class Form extends Component {
    state ={
        username:''
    }
    render(){
        return(
            <div>
           Name: <input
            type="text" 
            // placeholder="username" 
            onChange={this.handleClick}
            value = {this.state.username}/>
            </div>
        )
    }
    handleClick = (ev) =>{
        if(ev.target.value.length > 10)return
        this.setState({username: ev.target.value})
    }
}

export default Form