import React, {Component} from 'react'
import './newC.css'

export default class NewComment extends Component {

    state ={
        user: '',
        text: ''
    }
    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <input type = 'text'
                placeholder = 'user'
                value = {this.state.name}
                onChange={this.handleChange('user')}
                className={this.getClassName('user')}
                /><br/>

                <input type = 'text'
                placeholder = 'comment' 
                value = {this.state.comment}
                onChange={this.handleChange('text')}
                className={this.getClassName('text')}
                /><br/>
                
                <input type='submit' vlue = 'submit'/>
            </form>
        )
    }
    getClassName = (type) => this.state[type].length && this.state[type].length < limits[type].min ? 'form-input__error': ''


    handleChange = type => ev => {
        const {value} = ev.target
        if(value.length > limits[type].max)return
        this.setState({
            [type]:value
        })
    }


    handleSubmit=(ev)=>{
        ev.preventDefault();
        this.setState({
            user: '',
            text: ''
        })
        
    }
}
const limits = {
    user:{
        min:5,
        max:15
    },
    text: {
        min:20,
        max:50
        }
}