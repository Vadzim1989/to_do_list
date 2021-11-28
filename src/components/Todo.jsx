import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete';

export const Todo = () => {
    return <Chip    clickable
                    label='todo item'
                    icon={<CheckCircleIcon/>}
                    deleteIcon={<DeleteIcon/>}
                    onDelete={() => {}}
                    sx={{fontSize: 16, padding: 2.2}}
    />
}