import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return res.data;
})


const postSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        error: null,
        todos: []
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state)=> {
            state.isLoading = true;
        })
        builder.addCase(fetchPosts.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.error = null;
            state.todos = action.payload;
        })
        builder.addCase(fetchPosts.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.error.message;
            state.todos = [];
        })
    }
})

export default postSlice.reducer;