import { createSlice } from '@reduxjs/toolkit';

export const keySlice = createSlice({
    name: 'keys',
    initialState: {
        keys: [],
        filteredKeys: [],
    },
    reducers: {
        setKeys: (state, action) => {
            state.keys = action.payload;
            state.filteredKeys = action.payload;
        },
        filterKeys: (state, action) => {
            state.filteredKeys = state.keys.filter((key) => {return action.payload.includes(key)})
        }
    }
})

export const { setKeys, filterKeys } = keySlice.actions;
export default keySlice.reducer;