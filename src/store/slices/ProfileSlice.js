import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    profile: {},
    role: null
};

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        }
    }
});

export const {
    setProfile,
    setRole,
} = ProfileSlice.actions;

export default ProfileSlice;
