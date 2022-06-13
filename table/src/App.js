import List from './components/list';
import Data from './redux/data';
import FilterRowsContainer from './components/input/filterRows/filterRowsContainer';
import { Box } from '@mui/material';
import FilterColumns from './components/input/filterColumns';

function App() {
  return (
    <div className="App">
      <Data />
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <FilterColumns/>
        <FilterRowsContainer />
      </Box>
      <List />
    </div>
  )
}

export default App;