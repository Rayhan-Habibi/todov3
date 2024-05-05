import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addText(state, action) {
            state.push(action.payload)
            state.reverse()
        },
        status(state, action){
            const {id} = action.payload
            const checkId = state.find(todo => todo.id == id)
            if (checkId){
                checkId.completed = !checkId.completed
            }
        }
    }
})

export const { addText, status} = todoSlice.actions
export default todoSlice.reducer