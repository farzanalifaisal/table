import React, { useEffect, useState } from 'react'
import FilterRows from './filterRows';
import { addFilter, deleteFilterAt } from '../../../redux/slices/filterSlice';
import { IconButton, Button, Box, Paper, Skeleton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useSelector, useDispatch } from 'react-redux';

const FilterRowsContainer = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filterReducer.filters);

    const [showFilter, setShowFilter] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end', zIndex: '2', flexWrap: 'nowrap' }}>
            <Button variant="text" onClick={() => { setShowFilter(!showFilter); if (filters.length === 0) { dispatch(addFilter()) } }}>
                <FilterListIcon />&nbsp;FILTERS
            </Button>
            {showFilter &&
                <Paper style={{ padding: "8px", paddingTop: "10px" }}>
                    {filters.map((value, id) => {
                        return (
                            <Box key={id} sx={{ display: 'flex', paddingBottom: "10px" }}>
                                <IconButton sx={{ alignSelf: 'center', marginRight: '8px' }} onClick={() => { console.log('deleting filter at x'); dispatch(deleteFilterAt(id)) }}>
                                    <CloseIcon />
                                </IconButton>
                                <FilterRows index={id} filter={value}/>
                            </Box>
                        );
                    })}
                    <Button variant="text" onClick={() => dispatch(addFilter())}>
                        <AddIcon />&nbsp;ADD FILTER
                    </Button>
                </Paper>
            }
        </div>
    )
}

export default FilterRowsContainer;