import List from './components/list';
import FilterRowsContainer from './components/input/filterRows/filterRowsContainer';
import { Box, Container, Paper, Skeleton } from '@mui/material';
import FilterColumns from './components/input/filterColumns';
import { useSelector } from 'react-redux';

function App() {

  const data = useSelector((state) => state.dataReducer.data);
  const keys = useSelector((state) => state.keysReducer.filteredKeys);

  return (
    <div>
      <Container maxWidth="md" style={{marginTop: "30px"}}>
        {keys.length > 0 ? (
          <Box sx={{ maxHeight: 60, display: 'flex', justifyContent: 'space-between', alignItems: 'start', position: 'relative', zIndex: '3' }}>
            <FilterColumns />
            <FilterRowsContainer />
          </Box>) : (
          <Skeleton variant="text" height={100} />
        )}
        {data.length > 0 ? (
          <Paper style={{ maxHeight: 400, overflow: 'auto', marginTop: "10px" }} sx={{ position: 'relative' }} elevation={2}>
            <List />
          </Paper>) : (
          <Skeleton variant="rectangular" height={500} />
        )}
      </Container>
    </div>
  )
}

export default App;