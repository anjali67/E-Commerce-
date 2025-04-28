import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadQuantity = createAsyncThunk(
  'products/loadQuantity',
  async () => {
    const stored = await AsyncStorage.getItem('quantities');
    return stored ? JSON.parse(stored) : {};
  }
);

// Save quantities to AsyncStorage
export const saveQuantity = createAsyncThunk(
  'products/saveQuantity',
  async (_, { getState }) => {
    const { quantity } = getState();
    await AsyncStorage.setItem('quantities', JSON.stringify(quantity.quantities));
  }
);



const quantitySlice = createSlice({
  name: "quantity",
  initialState: {
    quantities: {}, 
  },
  reducers: {
    increment: (state, action) => {
      const { productId, price } = action.payload;
    
      if (!productId || price === undefined) {
        console.error("Missing productId or price in increment action", action.payload);
        return;
      }
    
      if (!state.quantities[productId]) {
        // If no quantity is set, initialize with 1 and the price
        state.quantities[productId] = { quantity: 1, totalPrice: price };
      } else {
        // Otherwise, update the existing quantity and totalPrice
        state.quantities[productId].quantity += 1;
        state.quantities[productId].totalPrice = state.quantities[productId].quantity * price;
      }
    },
    decrement: (state, action) => {
      const { productId, price } = action.payload;
     
      
      if (!productId || price === undefined) {
        console.error("Missing productId or price in decrement action", action.payload);
        return;
      }
    
      if (state.quantities[productId] && state.quantities[productId].quantity > 1) {
        state.quantities[productId].quantity -= 1;
        state.quantities[productId].totalPrice = state.quantities[productId].quantity * price;
      }
    },
    
    setQuantity: (state, action) => {
      state.quantities = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadQuantity.fulfilled, (state, action) => {
      state.quantities = action.payload;
    });
  }
});

export const { increment, decrement, setQuantity } = quantitySlice.actions;
export default quantitySlice.reducer;
