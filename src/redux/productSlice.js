import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PRODUCTLISTINGAPI } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadFavorites = createAsyncThunk(
  'products/loadFavorites',
  async () => {
    const stored = await AsyncStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  }
);

// Save favorites to AsyncStorage
export const saveFavorites = createAsyncThunk(
  'products/saveFavorites',
  async (_, { getState }) => {
    const { product } = getState();
    await AsyncStorage.setItem('favorites', JSON.stringify(product.favorites));
  }
);

// Fetch product list from API
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, {  rejectWithValue }) => {
    try {
      const response = await axios.get(
        PRODUCTLISTINGAPI
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch products');
    }
  }
);

// Product slice
const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    favorites: [],
    loading: false,
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const eventId = action.payload;
      const index = state.favorites.indexOf(eventId);
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(eventId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload || [];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch products';
      })
      .addCase(loadFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  },
});

export const { toggleFavorite } = productSlice.actions;
export default productSlice.reducer;
