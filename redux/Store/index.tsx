import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from '../Slice/userSlice'

const store = configureStore({
    reducer:{
        user: userReducer,
    }
})

// export type RootState = ReturnType<typeof store.>
export default store