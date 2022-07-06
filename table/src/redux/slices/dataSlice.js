import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        filteredData: []
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setFilteredData: (state, action) => {
            state.filteredData = action.payload;
        }
    }
})

export const { setData, setFilteredData } = dataSlice.actions;
export default dataSlice.reducer;