import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";

export const store = configureStore({
    reducer: {
        counters: counterReducer,
        todos: todoReducer
    }
})