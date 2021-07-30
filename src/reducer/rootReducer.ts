import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
// import modalReducer from "../slices/modalSlice";

export default configureStore({
    reducer: {
        // counter: counterReducer,
        // modal: modalReducer
    },
    devTools: true
});
