import * as React from 'react';
import Stack from '@mui/material/Stack';
import { TextField, Button, Todo } from '../components';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from '../redux/todoSelectors'
import { addTodo, deleteTodo } from '../redux/todoActions'


export const TodoListPage = () => {

    const [todoText, setTodoText] = useState('');
    const todos = useSelector(getTodos);
    const dispatch = useDispatch();


    console.log(todos);
    const handleChange = ({target: {value}}) => {
        setTodoText(value);
    };

    const addTodoHandler = () => {
        // add todo to store
        dispatch(addTodo(todoText));
        setTodoText('');
    };

    const onTodoClick = () => {
        console.log('todo click')
    };

    const onTodoDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    return (<>
        <h1>ToDo list</h1>
        <Stack  direction="row" 
                spacing={2}
                justifyContent="center"
                alignItems="center">
            <TextField
                handleChange={handleChange}
                id='todo-text-input'
                hintText='What are you going to do'
                fielName='TODO'
                value = {todoText}/>
            <Button type='add' text='ADD' handleClick={addTodoHandler}/>
        </Stack>
        <Stack  marginTop={10}
                spacing={5}
                justifyContent="center"
                alignItems="center">
                {todos.map((todoData) => 
                    <Todo 
                        {...todoData} 
                        handleClick={onTodoClick}
                        handleDelete={onTodoDelete}
                        key = {todoData.id} />)}                
        </Stack>
    </>)
};