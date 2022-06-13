import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
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
        filters: [
            // {
            //     column: "category",
            //     // contains
            //     operator: 'equals',
            //     // equals
            //     // starts with
            //     // ends with
            //     // is empty
            //     // is not empty
            //     // is any of
            //     value: "Men'S clothing"
            // },
            // {
            //     column: "title",
            //     operator: "starts with",
            //     value: "m"
            // },
            // {
            //     column: "title",
            //     operator: "ends with",
            //     value: 't'
            // },
            // {
            //     column: "title",
            //     operator: "is empty"
            // }
        ]
    },
    reducers: {
        addFilter: (state, action) => {
            state.filters.push(action.payload);
        },
        setConnector: (state, action) => {
            state.connector = action.payload;
        },
        changeFilter: (state, action) => {
            state.filters[state.filters.length - 1] = action.payload;
        },
        deleteFilter: (state) => {
            state.filters.pop();
        }
    }
})

export const { addFilter, setConnector, changeFilter, deleteFilter } = filterSlice.actions;
export default filterSlice.reducer;