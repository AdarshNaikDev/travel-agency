import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

const travelPkgsSlice = createSlice({
    name:'travelPkg',
    initialState,
    reducers: {
        add(state, action){
            const res = state.some((payload)=> {
                return payload._id == action.payload._id;
            })
            console.log("Res from slice", res)
            if(!res)
            {
                state.push(action.payload);
            }
            
        },
        remove(state, action){
            state = state.filter((item)=> item._id !== action.paylod)
        }
    }
});

export const {add, remove} = travelPkgsSlice.actions;
export default travelPkgsSlice.reducer;