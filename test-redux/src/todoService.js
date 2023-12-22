import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getTodo = createAsyncThunk(
    'todos/getTodo',
    async () => {
        let res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        return res.data;
    }
)

