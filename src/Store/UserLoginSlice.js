import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    IsLoggedIn : false,
    userName : null
}

const UserLoginSlice = createSlice({
    name: "UserLogin",
    initialState,
    reducers: {
        addUser(state, action){
            console.log("enters add user", action.payload)
            
            state.IsLoggedIn = action.payload.IsLoggedIn;
            state.userName = action.payload.userName;
        },
        removeUser(state,action){
            state = initialState;
        }
    }
})

export const{addUser, removeUser} = UserLoginSlice.actions;
export default UserLoginSlice.reducer;