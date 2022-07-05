import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterKeys } from '../../redux/slices/keySlice';
import { Box, FormControl, InputLabel, Select, OutlinedInput, Chip, MenuItem, Skeleton } from '@mui/material';

const FilterColumns = () => {

    const dispatch = useDispatch();

    const filteredKeys = useSelector((state) => state.keysReducer.filteredKeys);
    const keys = useSelector((state) => state.keysReducer.keys);

    const handleChange = (event) => {
        dispatch(filterKeys(event.target.value));
    };

    return (
        <FormControl sx={{ width: 'fit-content', zIndex: '1', flexWrap: 'nowrap', flexShrink: '0' }}>
            <InputLabel id="filter-label">Columns</InputLabel>
            <Select
                labelId="filter-label"
                multiple
                value={filteredKeys}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Columns" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} size="small" />
                        ))}
                    </Box>
                )}
            >
                {keys.map((key, id) => (
                    <MenuItem
                        key={id}
                        value={key}
                    >
                        {key}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default FilterColumns;