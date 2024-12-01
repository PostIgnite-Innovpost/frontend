import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserInfo {
  fullName: string;
  email: string;
  phoneNumber: string;
  userId: string;
  isActive:boolean;
  ccp:string;
  cle:string;
}

// Flag to toggle between dummy and real data
const USE_DUMMY_DATA = false;

const dummyData: UserInfo = {
  fullName: 'Amel',
  email: 'amel.feddag@ensia.edu.dz',
  phoneNumber: '+213 555 05 04 96',
  userId: '',
  isActive:true,
  ccp:'',
  cle:''
};

// const initialState: UserInfo = USE_DUMMY_DATA ? dummyData : {
const initialState: UserInfo =  {
  fullName: '',
  email: '',
  phoneNumber: '',
  userId: '',
  isActive:false,
  ccp:'',
  cle:'',
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
    logoutUser:(state, action:PayloadAction<UserInfo>) => {
      return initialState;
    }
  },
});

export const { setUser, updateUser} = userSlice.actions;
export default userSlice.reducer;
