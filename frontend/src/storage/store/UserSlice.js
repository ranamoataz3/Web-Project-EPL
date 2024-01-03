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
    isAdmin: false,
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
      state.isAdmin = false;
      localStorage.clear();
      window.location.reload();
    },
    admin: (state, action) => {
      state.isAdmin = action.payload.isAdmin;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
