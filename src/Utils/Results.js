import { createSlice } from "@reduxjs/toolkit";


const ResultsSlice = createSlice({
    name:"Results",
    initialState:{},
    reducers:{
        BtnResults: (state, action) => {
            state.data = (state, action.payload);
        },
    },
});


export const {BtnResults}= ResultsSlice.actions;
export default ResultsSlice.reducer;