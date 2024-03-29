import { createSlice } from "@reduxjs/toolkit"


const cartSlice =createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.filter(data => data.id !=action.payload);
        },
        clearItem:(state)=>{
            state.items.length= 0;
        }
    }
});

export const {addItem,removeItem,clearItem} =cartSlice.actions;
export default cartSlice.reducer;
