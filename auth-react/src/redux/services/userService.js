import {createAsyncThunk} from "@reduxjs/toolkit";
import getAxios from "./customAxios";
import axios from "axios";

export const login = createAsyncThunk(
    "user/login",
    async (user) => {
        let res = await getAxios().post("login", user);
        return res.data;
    }
)

export const getAll = createAsyncThunk(
    "user/getAll",
    async () => {
        try {
            let res = await getAxios().get("users");
            return res.data;
        } catch (e) {
            console.log(e);
            return [];
        }
    }
)

export const register = (newUser) => {
    return getAxios().post("register", newUser);
}