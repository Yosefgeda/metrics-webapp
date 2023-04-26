import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDetails = createAsyncThunk('get/details', async (id) => fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  .then((res) => res.json()));

const initialState = {
  isLoading: false,
  detailData: '',
  error: '',
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.detailData = action.payload;
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default detailsSlice.reducer;
