import * as React from 'react';
import Stack from '@mui/material/Stack';
import { TextField, Button, Todo } from '../components';

export const TodoListPage = () => {

    const handleChange = () => {};

    return (<>
        <h1>ToDo list</h1>
        <Stack  direction="row" 
                spacing={2}
                justifyContent="center"
                alignItems="center">
            <TextField
                value='bla-bla'
                handleChange={handleChange}
                id='todo-text-input'
                hintText='What are you going to do'
                fielName='TODO'/>
            <Button type='add' text='ADD'/>
        </Stack>
        <Stack  marginTop={10}
                spacing={5}
                justifyContent="center"
                alignItems="center">
                <Todo/>
        </Stack>
    </>)
};