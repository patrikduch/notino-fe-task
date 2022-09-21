import axios from 'axios';
import React, { useState } from 'react';
import uniqId from 'uniqid';
import useDidMount from '../../hooks/dom/component.didmount.hook';
import PageTitle from '../common/Page-Title';
import Todo from './Todo-Item';
import { TodoItemType} from './todo-types';


/**
 * @function TodoList Rendering list of todos.
 * @author Patrik Duch
 * @returns JSX node with collection of todo items.
 */
const TodoList: React.FC = () => {
    const [state, setState] = useState([] as TodoItemType[]);
    
    const fetchTodos = () => {
      return axios.get("http://localhost:3000/todos").then((res => {
        setState(res.data);
      })).catch(err => {
        console.error("Uppps.. data wasn't loaded correctly.");
        console.error(err);
      });
    }
  
    useDidMount(() => {
      fetchTodos();
    });
  
    const renderTodos = () => {
       return state.map((todo) => {
          return <Todo key={uniqId.process()} todo={todo}  />
       });
    }
  
    return (
      <>
        <PageTitle text='List of todos' />

        { renderTodos() }
      </>
    );
  }
  
  export default TodoList;