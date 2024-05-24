import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userReducer/userSlice';
import loadingSlice from './loadingReducer/loadingSlice';
import courseSlice from './courseReducer/courseSlice';
import commentSlice from './commentReducer/commentSlice';


export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    loadingReducer: loadingSlice,
    courseReducer: courseSlice,
    commentReducer: commentSlice,
  },
});
