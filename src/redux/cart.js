import { createSlice } from "@reduxjs/toolkit";



const INITIAL_STATE = {
  cartList: [],
  cartCount: 0,
  userDetail: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addtoCart: (state, action) => {
      const itemExist = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      if (itemExist) {
        state.cartList.forEach((item) => {
          if (item?.id === action.payload.id) {
            item.count = 1;
          }
        });
        return;
      }
      state.cartList.push({
        ...action.payload,
        count: 1,
      });
    },
    increment: (state, action) => {
      const productId = action.payload;
      state.cartList.forEach((item) => {
        if (item?.id === productId) {
          item.count++;
        }
      });
    },
    decrement: (state, action) => {
      const productId = action.payload;
      state.cartList.forEach((item,index) => {
        if (item?.id === productId) {
          item.count--;
        }
        if(item.count === 0){
          state.cartList.splice(index,1);
        }
      });
    },
  },
});

export const { increment, decrement, addtoCart } = cartSlice.actions;

export default cartSlice.reducer;
