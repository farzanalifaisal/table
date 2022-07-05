import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Box, FormControl, Skeleton, InputLabel, NativeSelect, TextField } from '@mui/material';
import { changeFilterAt } from '../../../redux/slices/filterSlice';

const FilterRows = (props) => {

    const dispatch = useDispatch();
    const keys = useSelector((state) => state.keysReducer.filteredKeys);
    const operators = useSelector((state) => state.filterReducer.operators);

    const filters = useSelector((state) => state.filterReducer.filters);

    const isValidFilter = (filter) => {
        if (filter.value.length === 0) {
            return false;
        }
        return true;
    }

    const [filter, setFilter] = useState({
        column: "",
        operator: "contains",
        value: "",
    })

    useEffect(() => {
        dispatch(changeFilterAt({ "filter": filter, "index": props.index }));
    }, [filter])

    return (
        <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="select-columns">
                    Columns
                </InputLabel>
                <NativeSelect
                    inputProps={{
                        name: 'columns',
                        id: "select-columns",
                    }}
                    onChange={(e) => setFilter(oldFilter => ({ ...oldFilter, column: e.target.value }))}
                >
                    {keys.map((value) => {
                        return (
                            <option key={value} value={value}>{value}</option>
                        );
                    })}
                </NativeSelect>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="select-operator">
                    Operator
                </InputLabel>
                <NativeSelect
                    inputProps={{
                        name: 'operator',
                        id: 'select-operator',
                    }}
                    onChange={(e) => setFilter(oldFilter => ({ ...oldFilter, operator: e.target.value }))}
                >
                    {operators.map((value) => {
                        return (
                            <option key={value} value={value}>{value}</option>
                        );
                    })}
                </NativeSelect>
            </FormControl>
            <TextField fullWidth
                label="Value"
                variant="standard"
                onChange={(e) => setFilter(oldFilter => ({ ...oldFilter, value: e.target.value }))}
                value={filters[props.index].value}
            />
        </Box>
        
    )
}

export default FilterRows;