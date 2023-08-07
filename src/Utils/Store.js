import {configureStore} from '@reduxjs/toolkit'
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import Results from './Results';
import ResultsSlice from './Results'
const store = configureStore({
    reducer : {
        app:appSlice,
        search:searchSlice,   
        Results:ResultsSlice,
    }
});

export default store;
