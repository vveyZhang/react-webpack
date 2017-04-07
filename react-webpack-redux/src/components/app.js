import React,{Component} from 'react';
import AddTodo from'./addTodo';
import TodoList from './todoList';
import Footer from './footer';
import {connect} from 'react-redux'
import {setVisibilityFilter,addTodo,completeTodo} from '../actions/actions.js';
import {visibilityFilter} from '../reducers/reducers.js'
 class App extends Component{

    render(){
        const {filter,dispatch,todos}=this.props;
        return(
            <div>
                <AddTodo onAddClick={text=>dispatch(addTodo(text))}></AddTodo>
                <TodoList todos={todos} onTodoClick={index=>dispatch(completeTodo(index))}></TodoList>
                <Footer filter={filter} onFilterChange={filter=>dispatch(setVisibilityFilter(filter))}></Footer>
            </div>
        )
    }
}
function todosShow(todos,filter){
    switch(filter){
        case visibilityFilter.SHOW_ALL:
            return todos;
        case visibilityFilter.SHOW_ACTIVE:
            return todos.filter(todo=>!todo.complete);
        case visibilityFilter.SHOW_COMPLETE:

           return todos.filter(todo=>todo.complete);
        default :
            return todos
    }
}

function selector(state){
    return{
        todos:todosShow(state.todos,state.setVisibilityFilter),
        filter:state.setVisibilityFilter
    }
}
export default connect(selector)(App)
