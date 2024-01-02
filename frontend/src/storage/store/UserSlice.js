import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    id: "",
    token: "",
    email: "",
    firstName: "",
    lastName: "",
    isAdmin: true,
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.isAdmin = action.payload.isAdmin;
      window.location.reload();
    },
    signup: (state) => {
      state.loggedIn = false;
      state.id = "";
    },
    logout: (state) => {
      state.loggedIn = false;
      state.id = "";
      state.token = "";
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      localStorage.clear();
    },
    admin: (state, action) => {
      state.isAdmin = action.payload.isAdmin;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
