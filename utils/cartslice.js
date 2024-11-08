import { createSlice } from "@reduxjs/toolkit";
const loadfromlocalstorage = () => {
    const savedcart = localStorage.getItem("cartitems") 
    return savedcart ? JSON.parse(savedcart):[];
}
const savetolocalstorage = (cartitems) =>{
    localStorage.setItem("cartitems",JSON.stringify(cartitems))
}
const cartslice = createSlice({
name: "cart",
initialState:{
    items:loadfromlocalstorage(),
},
reducers:{
    additems: (state, action) => {
        const existingItem = state.items.find((item) => item.id === action.payload.id);
        if (existingItem) {
            // Update quantity if the item already exists
            existingItem.quantity +=  action.payload.delta || 1;
            existingItem.totalPrice = (existingItem.price/100 || existingItem.defaultPrice/100)*existingItem.quantity; 
        } else {
            // Add new item to the cart with quantity
            const totalPrice = (action.payload.price / 100 || action.payload.defaultPrice / 100) * (action.payload.quantity || 1);
            state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 ,totalPrice});
        }
        savetolocalstorage(state.items)
    },
      
    removeitems:(state,action)=>{
        state.items = state.items.filter(item=>item.id !== action.payload.id);
        savetolocalstorage(state.items);
    },
    clearCart : (state)=>{
        state.items.length = 0;
        savetolocalstorage(state.items);
    }
}
});
export const {additems,removeitems,clearCart} = cartslice.actions;
export default cartslice.reducer;
