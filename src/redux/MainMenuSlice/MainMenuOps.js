import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://663e7a10e1913c476797c098.mockapi.io';
const instance = axios.create({
    baseURL: 'https://65eb2d1843ce16418933685b.mockapi.io/jasminestudio',
})

export const fetchMenu = createAsyncThunk('menu/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await instance.get('/OurSweets');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const fetchCakes = createAsyncThunk('menu/fetchCakes', async (_, thunkAPI) => {
    try {
        const response = await instance.get('/OurSweets', {
            params: {
                type: 'cakes'
            }
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});