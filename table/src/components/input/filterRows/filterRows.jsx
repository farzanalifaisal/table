import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Box, FormControl, Skeleton, InputLabel, NativeSelect, TextField, IconButton } from '@mui/material';
import { addFilter, changeFilterAt, deleteFilter } from '../../../redux/slices/filterSlice';
import CloseIcon from '@mui/icons-material/Close';

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
        column: "id",
        operator: "contains",
        value: "",
    })
    const [filterAdded, setFilterAdded] = useState(false);

    useEffect(() => {
        if (isValidFilter(filter) && !filterAdded) {
            dispatch(addFilter(filter));
            setFilterAdded(true);
        }
        else if (isValidFilter(filter)) {
            dispatch(changeFilterAt({"filter": filter, "id": props.id}));
        }
        // else {
        //     dispatch(deleteFilter());
        //     setFilterAdded(false);
        // }
        console.log(filters);
    }, [filter])

    return (
        keys.length > 0 ? (
            <Box sx={{ display: 'flex' }}>
                <IconButton sx={{ alignSelf: 'center', marginRight: '8px' }}>
                    <CloseIcon />
                </IconButton>
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
                />
            </Box>) : (
            <Skeleton variant="text" width={420} height={70} />
        )
    )
}

export default FilterRows;