import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import Form from './UserForm'
import Selected from './Select'
import DayPic from './DayPic'

class App extends Component {
    static propTypes = {}
        render (){
            return(
                <div>
                    <Form/>
                    <DayPic/>
                    <Selected articles = {this.props.articles}/>
                    <ArticleList articles = {this.props.articles} defaultOpen ={this.props.articles[0].id}/>
                </div>
            )
        }
    }

export default App