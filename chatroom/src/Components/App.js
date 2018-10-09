import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import Form from './UserForm'
import Filter from './Filters'
import Counter from './Counter'
import {HashRouter as Router, Route, NavLink} from "react-router-dom"

class App extends Component {
    static propTypes = {}
        render (){
            return(
                <Router>
                    <div>
                        <div>
                            <h2>Main Menu</h2>
                            <div><NavLink activeStyle={{color: 'red'}} to ='/counter'>Counter</NavLink></div>
                            <div><NavLink activeStyle={{color: 'red'}} to ='/filters'>Filter</NavLink></div>
                            <div><NavLink activeStyle={{color: 'red'}} to ='/articles'>ArticleList</NavLink></div>
                        </div>
                        <Form/>
                        <Route path = '/counter' component = {Counter}/>
                        <Route path = '/filters'  component = {Filter}/>
                        <Route path = '/articles' component = {ArticleList}/>
                        
                    </div>
                </Router>
            )
        }
    }

export default App