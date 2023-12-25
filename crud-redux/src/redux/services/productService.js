import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk(
    'products/getAll',
    async () => {
        let res = await axios.get("http://localhost:8080/products");
        return res.data;
    }
)

export const add = createAsyncThunk(
    'products/add',
     async (newProduct) => {
        let newProductRes = await axios.post("http://localhost:8080/products", newProduct);
        return newProductRes;
    }
)