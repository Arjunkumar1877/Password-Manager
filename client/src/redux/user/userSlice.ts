import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type UserType = {
    username: string,
    email: string
}

type UserStateType = {
    currentUser: UserType | null;
  };

const initialState: UserStateType = {
    currentUser: null
}



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInSuccess: (state, action: PayloadAction<UserType>)=>{
         state.currentUser = action.payload;
        },
        signOutSuccess: (state)=>{
            state.currentUser = null;
        }
    }

});

export const { signInSuccess, signOutSuccess } = userSlice.actions;

export default userSlice.reducer;