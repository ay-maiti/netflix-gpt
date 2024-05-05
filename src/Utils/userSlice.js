import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        user:null
    },
    reducers:{
        addUser:(state, user)=>{
            state.user = {...user.payload}
        },
        removeUser:(state)=>{
            state.user = null
        }
    }
})

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;