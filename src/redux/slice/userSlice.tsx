import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
    name: 'User',
    initialState: {
        userName: '',
        isLogged: false,
    },
    reducers:{
        login(state, { payload }){
            return { ...state, isLogged: true, userName: payload}
        },
        logout(state){
            return { ...state, isLogged: false, userName: ""}
        }
    }
})

export const { login, logout } = slice.actions

export const selectUser = (state: any) => state.user

export default slice.reducer