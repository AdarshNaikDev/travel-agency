import { configureStore} from '@reduxjs/toolkit';
import travelPkgsReducer from './travelPkgsSlice';
import UserLoginReducer from './UserLoginSlice';

const store = configureStore({

    reducer:{
        travelPkgs : travelPkgsReducer,
        UserLogin : UserLoginReducer
    }
});

export default store;