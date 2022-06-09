import { createSlice } from '@reduxjs/toolkit';

export const keySlice = createSlice({
    name: 'keys',
    initialState: {
        keys: [],
    },
    reducers: {
        setKeys: (state, action) => {
            state.keys = action.payload;
        }
    }
})

export const { setKeys } = keySlice.actions;
export default keySlice.reducer;