import optionsReducer from "./optionsSlice";
import  todoReducer  from "./todoSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        todo: todoReducer,
        configure: optionsReducer
    }
})