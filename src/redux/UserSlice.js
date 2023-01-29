import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  photo: null,
}

export const userSice = createSlice({
    name:"users",
    initialState,
   reducers:{
    setLogin: (state, action) => {
      state.name = action.payload.name;
      state.photo = action.payload.photo;
    },
   }
})
export const selectName = (state) => state.user.name;
export const selectPhoto = (state) => state.user.photo;
export default userSice.reducer
export const {setLogin} = userSice.actions

