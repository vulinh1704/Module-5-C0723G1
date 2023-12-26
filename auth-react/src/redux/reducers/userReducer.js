import {createSlice} from "@reduxjs/toolkit";
import {getAll, login} from "../services/userService";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem("currentUser")),
    list: []
}
const userSlice = createSlice({
        name: "users",
        initialState,
        extraReducers: builder => {
            builder.addCase(login.fulfilled, (state, {payload}) => {
                localStorage.setItem("currentUser", JSON.stringify(payload));
                state.currentUser = payload;
            })
            builder.addCase(getAll.fulfilled, (state, {payload}) => {
                state.list = payload;
            })
        }
    }
)
export default userSlice.reducer;