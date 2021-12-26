import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../redux/user/userSelector';
import { userLogout } from '../redux/user/userActions';

export default function ButtonAppBar() {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(userLogout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {userName}
          </Typography>
          <Button color="inherit" onClick={signOut}>Loguot</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}