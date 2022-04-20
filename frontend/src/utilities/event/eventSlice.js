import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import eventQueries from './eventQueries';

const initialState = {
  events: [],
  error: null,
  loading: false,
};

export const getEvents = createAsyncThunk(
  '/events',
  async (query, thunkAPI) => {
    try {
      return await eventQueries.fetchAllEvents(query);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload.events;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.events = null;
      });
  },
});

export default eventSlice.reducer;
