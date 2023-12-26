import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    list: []
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {

    }
});
export default productSlice.reducer;