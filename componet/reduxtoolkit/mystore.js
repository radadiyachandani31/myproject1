import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from "../reduxtoolkit/myproductslice"
import MyCartReducer from "../reduxtoolkit/mycartslice"
export const MyStore=configureStore({
    reducer:{
        product:MyProductReducer,
        cart:MyCartReducer,
    }
})