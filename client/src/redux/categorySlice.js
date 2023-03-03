// here we will call api through async thunk and through that data we will update state in  categprySlices
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../utils/axiosClient";

export const fetchCategories = createAsyncThunk("api/categories", async () => {
    try {
        const response = await axiosClient.get("/categories?populate=Image");
        console.log(response.data.data)
        return response.data.data;
    } catch (error) {
        return Promise.reject(error);
    }
});
const categorySlice = createSlice({
    name: "categorySlice",
    initialState: {
        categories: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        });
    },
});

export default categorySlice.reducer