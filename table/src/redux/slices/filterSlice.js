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
            {
                column: "id",
                operator: "contains",
                value: "",
            }
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
        addFilter: (state) => {
            // state.filters.push(action.payload);
            state.filters.push({
                column: "id",
                operator: "contains",
                value: "",
            });
        },
        setConnector: (state, action) => {
            state.connector = action.payload;
        },
        changeFilterAt: (state, action) => {
            state.filters[action.payload.index] = action.payload.filter;
        },
        deleteFilterAt: (state, action) => {
            console.log(action.payload)
            state.filters.splice(action.payload, 1);
        }
    }
})

export const { addFilter, setConnector, changeFilterAt, deleteFilterAt } = filterSlice.actions;
export default filterSlice.reducer;