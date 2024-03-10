import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null,
    error : null,
    loading : false
}

const UserSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        signInStart : (state) => {
            state.loading = true,
            state.error = null
        },
        signInSucess : (state , action) => {
            state.loading = false,
            state.error = null,
            state.currentUser = action.payload
        },
        signInFauiler : (state,action) => {
            state.error = action.payload,
            state.loading = false
        }
    }
})

export const {signInStart , signInSucess , signInFauiler} = UserSlice.actions ; 
export default UserSlice.reducer;