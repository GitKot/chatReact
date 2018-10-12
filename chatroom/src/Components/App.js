import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Form from './UserForm'
import Filter from './Filters'
import Counter from './Counter'
import Articles from './Routs/RoutAtricles'
import NewArticle from "./Routs/NewRoute"
import NotFound from "./Routs/NotFound"
import CommentsList from "./Routs/CommentsList"
import {Router, Route, NavLink, Switch, Redirect} from "react-router-dom"
import history from '../history'
import {ConnectedRouter} from 'react-router-redux'

class App extends Component {
    static propTypes = {}
    static childContextTypes = {
        user: PropTypes.string,
    }
    getChildContext(){
        return {user:'Andry'}
    }

        render (){
            return(
                <ConnectedRouter history={history}>
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
                            <Route path = '/comments' component = {CommentsList}/>
                            {/* <Redirect from ='/comments/' to={'/comments/1'} /> */}
                            <Route path = '*' component = {NotFound}/>
                        </Switch>
                    </div>
                </ConnectedRouter>
            )
        }
    }

export default App