import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import Form from './UserForm'
import Filter from './Filters'
import Counter from './Counter'


class App extends Component {
    static propTypes = {}
        render (){
            return(
                <div>
                    <Counter/>
                    <Form/>
                    <Filter articles = {[]}/>
                    <ArticleList />
                </div>
            )
        }
    }

export default App