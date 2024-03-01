import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState:{
        isfetching: false,
        currentUser:null,
        isfailure: false,
    },
    reducers:{
    loginStart :(state)=>{
      state.isfetching = true
    },
    loginSuccess :(state, action)=>{
        state.isfetching = false;
        state.currentUser = action.payload;
        state.isfailure = false
    },
    loginfailure :(state)=>{
        state.isfailure = true
    },
    logout :(state)=>{
        state.currentUser = null;
    }
    }
})

export const  { loginStart, loginfailure, loginSuccess, logout  } = userSlice.actions
export default userSlice.reducer