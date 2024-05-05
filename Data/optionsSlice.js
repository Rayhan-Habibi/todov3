import { createSlice } from "@reduxjs/toolkit";

export const optionsSlice = createSlice({
    name: "options",
    initialState: { modalVisible: false },
    reducers: {
        modalStatus(state){
            state.modalVisible = !state.modalVisible
        }
    }
})

export const {modalStatus} = optionsSlice.actions
export default optionsSlice.reducer