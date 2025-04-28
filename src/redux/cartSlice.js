import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadCart = createAsyncThunk(
  'cart/loadCart',
  async () => {
    const stored = await AsyncStorage.getItem('cart');
    return stored ? JSON.parse(stored) : {};
  }
);

export const saveCart = createAsyncThunk(
  'cart/saveCart',
  async (_, { getState }) => {
    const { cart } = getState();
    await AsyncStorage.setItem('cart', JSON.stringify(cart.cartItems));
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: {}, 
  },
  reducers: {
    addToCart: (state, action) => {
      const { productId, price, productData } = action.payload;

      if (!productId || price === undefined) {
        console.error("Missing productId or price in addToCart action", action.payload);
        return;
      }

      if (!state.cartItems[productId]) {
        state.cartItems[productId] = { 
          quantity: 1, 
          totalPrice: price,
          productData: productData,
        };
      } else {
        state.cartItems[productId].quantity += 1;
        state.cartItems[productId].totalPrice = state.cartItems[productId].quantity * price;
      }
    },
    
    clearCart: (state) => {
      state.cartItems = {};
    },

    removeFromCart: (state, action) => {
      const { productId } = action.payload;
  
      if (!productId) {
        console.error("Missing productId in removeFromCart action", action.payload);
        return;
      }
  
      if (state.cartItems[productId]) {
        delete state.cartItems[productId];
      }
    },
   
  },
  extraReducers: (builder) => {
    builder.addCase(loadCart.fulfilled, (state, action) => {
      state.cartItems = action.payload;
    });
  }
});

export const { addToCart, clearCart , removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
