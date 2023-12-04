import './App.css'
import { Box, Stack } from '@mui/material';
import Nav from './components/nav';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <Stack padding='2'>
      <Nav/>
      <Box padding={5}>
        <Outlet/>
      </Box>
    </Stack>
  )
}

export default App
