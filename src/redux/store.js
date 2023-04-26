import { configureStore } from '@reduxjs/toolkit';
import financeSlice from './home/homeSlice';
import detailsSlice from './details/detailsSlice';

const store = configureStore({
  reducer: {
    finance: financeSlice,
    details: detailsSlice,
  },
});

export default store;
