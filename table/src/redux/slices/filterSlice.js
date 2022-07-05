import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        defaultOption: '',
        operators: [
            "contains",
            "equals",
            "starts with",
            "ends with",
            "is empty",
            "is not empty",
            "is any of"
        ],
        connector: "or",
        filters: []
    },
    reducers: {
        addFilter: (state) => {
            // state.filters.push(action.payload);
            state.filters.push({
                column: state.defaultOption,
                operator: "contains",
                value: "",
            });
        },
        setConnector: (state, action) => {
            state.connector = action.payload;
        },
        changeFilterAt: (state, action) => {
            if(action.payload.filter.column === ""){
                action.payload.filter.column = state.defaultOption;
            }
            state.filters[action.payload.index] = action.payload.filter;
        },
        deleteFilterAt: (state, action) => {
            state.filters.splice(action.payload, 1);
        },
        setDefaultOption: (state, action) => {
            state.defaultOption = action.payload;
        }
    }
})

export const { addFilter, setConnector, changeFilterAt, deleteFilterAt, setDefaultOption } = filterSlice.actions;
export default filterSlice.reducer;