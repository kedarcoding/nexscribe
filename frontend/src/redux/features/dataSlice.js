// redux/features/dataSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "@/services/api"; // your custom one, not plain axios

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async ({ page, search }) => {
    const response = await get(`/insights?page=${page}&search=${search}`);
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
    searchQuery: "",
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
        state.totalPages = action.payload.last_page;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPage, setSearchQuery } = dataSlice.actions;
export default dataSlice.reducer;
