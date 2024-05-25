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

export const fetchPastries = createAsyncThunk('menu/fetchPastries', async (_, thunkAPI) => {
    try {
        const response = await instance.get('/OurSweets', {
            params: {
                type: 'pastries'
            }
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const fetchColdDishes = createAsyncThunk('menu/fetchColdDishes', async (_, thunkAPI) => {
    try {
        const response = await instance.get('/OurSweets', {
            params: {
                type: 'cold-dishes'
            }
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const fetchTarts = createAsyncThunk('menu/fetchTarts', async (_, thunkAPI) => {
    try {
        const response = await instance.get('/OurSweets', {
            params: {
                type: 'tarts'
            }
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const fetchDrinks = createAsyncThunk('menu/fetchDrinks', async (_, thunkAPI) => {
    try {
        const response = await instance.get('/OurSweets', {
            params: {
                type: 'drinks'
            }
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const fetchOneDish = createAsyncThunk('menu/fetchOneDish', async (dishId, thunkAPI) => {
    console.log("dasdasd", dishId);
    try {
        const response = await instance.get(`/OurSweets/${dishId}`);
        
        console.log(response.data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})