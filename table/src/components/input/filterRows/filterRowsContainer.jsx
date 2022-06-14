import React from 'react'
import FilterRows from './filterRows';
import { addFilter, deleteFilterAt } from '../../../redux/slices/filterSlice';
import { IconButton, Button, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const FilterRowsContainer = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filterReducer.filters);
    useEffect(() => {
        console.log(filters)
    }, [filters])
    return (
        <div>
            {filters.map((value, id) => {
                return (
                    <Box key={id} sx={{ display: 'flex' }}>
                        <IconButton sx={{ alignSelf: 'center', marginRight: '8px' }} onClick={() => { dispatch(deleteFilterAt(id)) }}>
                            <CloseIcon />
                        </IconButton>
                        <FilterRows index={id} />
                    </Box>
                );
            })}
            <Button variant="text" onClick={() => dispatch(addFilter())}>
                <AddIcon/>&nbsp;ADD FILTER
            </Button>
        </div>
    )
}

export default FilterRowsContainer;