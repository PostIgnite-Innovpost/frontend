import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  userId: string;
  profilePicture: string;
  currentPlan: 'Basic' | 'premium';
}

// Flag to toggle between dummy and real data
const USE_DUMMY_DATA = false;

const dummyData: UserInfo = {
  firstName: 'Amel',
  lastName: 'FEDDAG',
  email: 'amel.feddag@ensia.edu.dz',
  phoneNumber: '+213 555 05 04 96',
  userId: '',
  profilePicture: '',
  currentPlan: 'Basic',
};

// const initialState: UserInfo = USE_DUMMY_DATA ? dummyData : {
const initialState: UserInfo =  {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  userId: '',
  profilePicture: '',
  currentPlan: 'Basic',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo>) => {
      return action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<UserInfo>>) => {
      return { ...state, ...action.payload };
    },
    activatePremium: (state) => {
      state.currentPlan = 'premium';
    },
  },
});

export const { setUser, updateUser, activatePremium } = userSlice.actions;
export default userSlice.reducer;
