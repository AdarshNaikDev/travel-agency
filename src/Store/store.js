import { configureStore} from '@reduxjs/toolkit';
import travelPkgsReducer from './travelPkgsSlice';

const store = configureStore({

    reducer:{
        travelPkgs : travelPkgsReducer,
    }
});

export default store;