import {createSlice} from '@reduxjs/toolkit';



// Initially everything should be blank
const initialState={
    name:"",
    email:"",
    photo:"",
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserloginDetails : (state , action)=>{
            state.name = action.payload.name;
            console.log(action);
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },

        setSignOutState : (state) =>{
            state.name = null;
            state.email = null;
            state.photo = null;
        },
    },
});

export const{setUserloginDetails , setSignOutState} = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;