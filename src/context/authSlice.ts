// authSlice.ts
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { RootState } from "./store";

// Define a type for the decoded token payload
interface DecodedToken {
  nbf: number;
  exp: number;
  iss: string;
  aud: string;
  client_id: string;
  sub: string;
  auth_time: number;
  idp: string;
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": string;
  "AspNet.Identity.SecurityStamp": string;
  role: string;
  Permission: string[] | number[];
  preferred_username: string;
  name: string;
  email: string;
  email_verified: boolean;
  jti: string;
  iat: number;
  scope: string[];
  amr: string[];
}

interface AuthState {
  user: DecodedToken | null;
  isAuthenticated: boolean;
  access_token: string | null;
  refresh_token: string | null;
  expires_in: number | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  access_token: null,
  refresh_token: null,
  expires_in: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setTokens: (
      state,
      action: PayloadAction<{
        access_token: string;
        refresh_token: string;
        expires_in: number;
      }>
    ) => {
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      state.expires_in = action.payload.expires_in;
    },
    // clearTokens: (state) => {
    //   state.access_token = null;
    //   state.refresh_token = null;
    //   state.expires_in = null;
    // },
    logout: (state) => {
      state.access_token = initialState.access_token;
      state.expires_in = initialState.expires_in;
      state.isAuthenticated = initialState.isAuthenticated;
      state.refresh_token = initialState.refresh_token;
      state.user = initialState.user;

      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      Cookies.remove("expires_in");
      Cookies.remove("token_type");
    },
    // setUser: (state, action: PayloadAction<DecodedToken | null>) => {
    //   state.user = action.payload;
    //   state.isAuthenticated = true;
    // },
    // clearUser: (state) => {
    //   state.user = null;
    //   state.isAuthenticated = false;
    // },
    initializeUserFromToken: (state) => {
      const token = Cookies.get("access_token");
      const refresh_token = Cookies.get("refresh_token");
      const expires_in = Cookies.get("expires_in");
      if (token) {
        try {
          const decodedToken = jwtDecode(token) as DecodedToken;
          state.user = {
            ...decodedToken,
            Permission: decodedToken.Permission.map(Number),
          };
          state.isAuthenticated = true;
          state.access_token = token;
          state.refresh_token = refresh_token || null;
          state.expires_in = Number(expires_in);
        } catch (error) {
          state.isAuthenticated = false;
        }
      }
    },
  },
});

export const isAuthenticatedSelector = (state: RootState) =>
  state.auth.isAuthenticated;

export const userRolesSelector = (state: RootState) =>
  state.auth.user?.role || [];

export const getIsAuthenticated = createSelector(
  isAuthenticatedSelector,
  (isAuthenticated) => ({ isAuthenticated })
);

export const getUserRoles = createSelector(userRolesSelector, (userRoles) => ({
  userRoles,
}));

export const {
  setTokens,
  //   clearTokens,
  //   setUser,
  //   clearUser,
  logout,
  initializeUserFromToken,
} = authSlice.actions;

export default authSlice.reducer;
