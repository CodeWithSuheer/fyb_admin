import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axios from "axios";

// INITIAL STATE
const initialState = {
  user: null,
  isLoading: false,
};

//API URL
const signupUrl = "http://localhost:8000/api/users/signup";
const loginUrl = "http://localhost:8000/api/users/login";
const logoutUrl = "http://localhost:8000/api/users/logout";
const verifyOtpUrl = "http://localhost:8000/api/users/verifyOtp";
const sendResetPasswordOTPUrl =
  "http://localhost:8000/api/users/sendResetPasswordOTP";
const updatePasswordUrl = "http://localhost:8000/api/users/updatePassword";
const userSession = "http://localhost:8000/api/users/persistUserSession";

// Register Function
export const createuserAsync = createAsyncThunk(
  "user/create",
  async (formData) => {
    try {
      const response = await axios.post(signupUrl, formData);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }
);

// Login Function
export const loginUserAsync = createAsyncThunk(
  "user/login",
  async (formData) => {
    try {
      const response = await axios.post(loginUrl, formData);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }
);

// Logout
export const logoutUserAsync = createAsyncThunk("user/logout", async () => {
  try {
    const response = await axios.post(logoutUrl);
    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.error);
  }
});

// User Session Function
export const userSessionAsync = createAsyncThunk(
  "user/userSession",
  async () => {
    try {
      const response = await axios.get(userSession);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// sendOtp
export const sendOtpAsync = createAsyncThunk("user/serndOtp", async (formData) => {
    try {
      const response = await axios.post(sendResetPasswordOTPUrl,formData);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.error);
    }
  });

  // verifyOtp
export const verifyOtpAsync = createAsyncThunk("user/verifyOtp", async (formData) => {
    try {
      const response = await axios.post(verifyOtpUrl,formData);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.error);
    }
  });

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // signup
      .addCase(createuserAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createuserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
      })

      // logout
      .addCase(logoutUserAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logoutUserAsync.fulfilled, (state, action) => {
        state.user = null;
      })

      // Login
      .addCase(loginUserAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })

      // User Session
      .addCase(userSessionAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userSessionAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })

  },
});

export default authSlice.reducer;
