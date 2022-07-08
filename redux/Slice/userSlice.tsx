import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
    name: 'Usuario',
    initialState: {
        userName: '',
        isLogged: false,
    },
    reducers:{
        changeUser(state, { payload }){
            return { ...state, isLogged: false, userName: payload}
        },
        logout(state){
            return { ...state, isLogged: false, userName: ""}
        }
    }
})

export const { changeUser, logout } = slice.actions

export const selectUser = (state: any) => state.user

export default slice.reducer