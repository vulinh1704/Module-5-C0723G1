import {createSlice} from "@reduxjs/toolkit";
import {getTodo} from "./todoService";

const initialState = {
    todo: {}
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    extraReducers: builder => {
        builder.addCase(getTodo.fulfilled, (state, actions) => {
            state.todo = actions.payload;
        })
    }
})
export default todoSlice.reducer;