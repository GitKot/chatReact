import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import Form from './UserForm'
import Filter from './Filters'
import Counter from './Counter'
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom"
import Articles from './Routs/RoutAtricles'
import NewArticle from "./Routs/NewRoute"
import NotFound from "./Routs/NotFound"
import CommentsList from "./Routs/CommentsList"


class App extends Component {
    static propTypes = {}
        render (){
            return(
                <Router>
                    <div>
                    <div>
                        <h2>Main Menu</h2>
                        <div><NavLink activeStyle={{color: 'red'}}
                         to ='/counter'>Counter</NavLink></div>
                        <div><NavLink activeStyle={{color: 'red'}}
                         to ='/filters'>Filter</NavLink></div>
                        <div><NavLink activeStyle={{color: 'red'}} 
                         to ='/articles'>ArticleList</NavLink></div>
                         {/* <div><NavLink activeStyle = {{color:'red'}}
                         to = '/comments'>Comments</NavLink></div> */}
                    </div>
                        <Form/>
                        <Switch>
                            <Route path = '/counter' component = {Counter}/>
                            <Route path = '/filters'  component = {Filter}/>
                            <Route path = '/articles/new' component = {NewArticle}/>
                            <Route path = '/articles' component = {Articles}/>
                            <Route path = '/comments/:page' component = {CommentsList}/>
                            <Route path = '*' component = {NotFound}/>
                        </Switch>
                    </div>
                </Router>
            )
        }
    }

export default App