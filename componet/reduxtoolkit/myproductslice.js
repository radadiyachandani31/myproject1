import { createSlice } from "@reduxjs/toolkit";
const MyProductSLice=createSlice({
    name:'product',
    initialState:[],
    reducers:{
        addMyProduct(state,action){
              state.push(action.payload)
        }
    }
})
export const {addMyProduct}=MyProductSLice.actions;
export default MyProductSLice.reducer;