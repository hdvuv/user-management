import { createSlice } from "@reduxjs/toolkit";
import { EMPTY } from "../../constants/Common";
import { RootState } from "../../redux/store/store";

export interface UserState {
    name: string,
    sex: string,
    phone: string,
    email: string,
    address: string,
    job: string,
    company: string,
    position: string,
    workingAddress: string
}

const initialUser: UserState = {
    name: EMPTY,
    sex: EMPTY,
    phone: EMPTY,
    email: EMPTY,
    address: EMPTY,
    job: EMPTY,
    company: EMPTY,
    position: EMPTY,
    workingAddress: EMPTY
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: initialUser
    },
    reducers: {
        create1: (state, action) => {
            state.user.name = action.payload.name;
            state.user.sex = action.payload.sex;
            state.user.phone = action.payload.phone;
            state.user.email = action.payload.email;
            state.user.address = action.payload.address;
        },
        create2: (state, action) => {
            state.user.job = action.payload.job;
            state.user.company = action.payload.company;
            state.user.position = action.payload.position;
            state.user.workingAddress = action.payload.workingAddress;
        },
    }
})

export const { create1, create2 } = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
