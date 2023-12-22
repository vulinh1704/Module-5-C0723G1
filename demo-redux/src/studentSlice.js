import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    student: {
        name: 'Trương Linh'
    }
}
const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        showHello(state, action) {
            console.log(action.payload)
            state.student.name = action.payload;
        }
    }
});

export const {showHello} = studentSlice.actions;
export default studentSlice.reducer;