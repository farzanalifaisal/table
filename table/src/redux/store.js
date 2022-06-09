import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice.js';
import keysReducer from './slices/keySlice.js';
import filterReducer from './slices/filterSlice.js';

export default configureStore({
    reducer: {
        dataReducer: dataReducer,
        keysReducer: keysReducer,
        filterReducer: filterReducer,
    }
});