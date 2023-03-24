import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://641b60fc9b82ded29d510e63.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  '/contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  '/contacts/addContact',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name: user.name,
        phone: user.number,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  '/contacts/deleteContactl',

  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const loading = getState().contacts.isLoading;
      if (loading) {
        return false;
      }
    },
  }
);
