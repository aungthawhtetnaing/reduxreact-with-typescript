import { configureStore } from '@reduxjs/toolkit';
// const reduxLogger = require('redux-logger')
// const cakeReducer = require('../features/cake/cakeSlice');
// const iceCreamReducer = require('../features/icecream/iceCreamSlice');
// const userReducer = require('../features/user/userSlice');
import userReducer from '../features/user/userSlice'
import iceCreamReducer from '../features/icecream/iceCreamSlice'
import cakeReducer from '../features/cake/cakeSlice'
// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer :{ 
        cake : cakeReducer,
        iceCream:iceCreamReducer,
        user:userReducer
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch