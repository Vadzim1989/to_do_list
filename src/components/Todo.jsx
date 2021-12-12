import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete';
import {memo} from 'react'

export const Todo = memo(({done, text, handleClick, handleDelete, id}) => {
    console.log('render');
    return <Chip    
                clickable
                label={text}
                icon={done ? <CheckCircleIcon/> : <CircleIcon/>}
                deleteIcon={<DeleteIcon/>}
                onDelete={() => handleDelete(id)}
                sx={{fontSize: 16, padding: 2.2, maxWidth: 300, minWidth: 250}}
                sx={done ? {bgcolor: 'yellow'} : {bgcolor: 'grey'}}
                onClick={() => handleClick(id)}
    />
});