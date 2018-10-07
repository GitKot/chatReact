import React, {Component} from 'react'
import './newC.css'
import {connect} from 'react-redux'
import {addComment} from '../../AC/ACreators'

class NewComment extends Component {

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
        const {addComment, id} = this.props
        const comment = {...this.state}
       
        
        addComment(comment, id)

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


export default  connect((state, ownProps)=>{return ownProps},{addComment})(NewComment)