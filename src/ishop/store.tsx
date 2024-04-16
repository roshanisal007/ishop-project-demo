import { configureStore } from "@reduxjs/toolkit";
import CartSlicer from "./CartSlicer";

export default configureStore({
    reducer: {
        store : CartSlicer         
    }                               
})