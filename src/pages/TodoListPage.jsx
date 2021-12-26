import * as React from 'react';
import Stack from '@mui/material/Stack';
import { TextField, Button, Todo } from '../components';
import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getFilteredTodos } from '../redux/todo/todoSelectors'
import { addTodo, deleteTodo, switchTodoState } from '../redux/todo/todoActions'
import { Filter } from '../components/Filter';
import ButtonAppBar from '../components/ButtonAppBar';



export const TodoListPage = () => {

    const [todoText, setTodoText] = useState('');
    const todos = useSelector(getFilteredTodos);
    const dispatch = useDispatch();

    const handleChange = ({target: {value}}) => {
        setTodoText(value);
    };

    const addTodoHandler = () => {
        // add todo to store
        dispatch(addTodo(todoText));
        setTodoText('');
    };

    const onTodoClick = useCallback((id) => {
        dispatch(switchTodoState(id))
    },[dispatch]);

    const onTodoDelete = useCallback((id) => {
        dispatch(deleteTodo(id));
    },[dispatch]);

    return (<>
        <ButtonAppBar/>
        <h1>ToDo list</h1>
        <Stack justifyContent="center"
                alignItems="center"
                marginBottom={5}>
            <Filter/>
        </Stack>
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