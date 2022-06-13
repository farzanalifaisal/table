import React, { useState } from 'react'
import FilterRows from './filterRows'
import { Stack, Button } from '@mui/material';

const FilterRowsContainer = () => {
  const [filterCount, setFilterCount] = useState(1);

  return (
    <Stack>
      {[...Array(filterCount)].map((e, i) => <FilterRows key={i} id={i}></FilterRows>)}
      <Button variant="text" sx={{marginLeft: "48px", width: "120px"}} onClick={() => setFilterCount(filterCount + 1)}>Add Filter</Button>
    </Stack>
  )
}

export default FilterRowsContainer;