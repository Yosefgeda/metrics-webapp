import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coingecko.com/api/v3/coins/';

export const getFinance = createAsyncThunk('get/getFinanceData', async () => fetch(url)
  .then((res) => res.json()));

const initialState = {
  financeData: [],
  isLoading: false,
  error: '',
};

const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getFinance.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFinance.fulfilled, (state, action) => {
      state.isLoading = false;
      state.financeData = action.payload;
    });
    builder.addCase(getFinance.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default HomeSlice.reducer;
