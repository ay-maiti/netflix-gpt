import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        person:null
    },
    reducers:{
        addUser:(state, user)=>{
            state.person = {...user.payload}
        },
        removeUser:(state)=>{
            console.log("user removed")
            state.person = null
        }
    }
})

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;