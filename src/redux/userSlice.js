import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  details: {},
  status: "",
  isLoading: false,
  error: "",
};

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  const response = await axios.get(
    `https://61294559068adf001789b85c.mockapi.io/api/users`
  );
  return response.data;
});

export const fetchUserDetails = createAsyncThunk(
  "users/fetchUserDetails",
  async (id) => {
    const response = await axios.get(
      `https://61294559068adf001789b85c.mockapi.io/api/users/${id}`
    );
    return response.data;
  }
);

export const addNewUser = createAsyncThunk("users/addNewUser", async (body) => {
  const response = await axios.post(
    `https://61294559068adf001789b85c.mockapi.io/api/users`,
    body
  );
  return response.data;
});

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (userData) => {
    const { id, name, surname, job, details, gender, email, birthDate } =
      userData;
    try {
      const response = await axios.patch(
        `https://61294559068adf001789b85c.mockapi.io/api/users/${id}`,
        {
          name,
          surname,
          job,
          details,
          gender,
          email,
          birthDate,
        }
      );
      return response.data;
    } catch (err) {
      console.log(err);
      throw err; // Hata durumunda hatayı fırlatın, böylece kullanıcı bilgilendirilebilir
    }
  }
);

export const handleDelete = createAsyncThunk("users/deleteUser", async (id) => {
  await axios.delete(
    `https://61294559068adf001789b85c.mockapi.io/api/users/${id}`
  );
  return id;
});

export const userSlice = createSlice({
  name: `users`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(fetchUserDetails.pending, (state) => {
      state.isLoading = true;
      state.status = "loading";
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.isLoading = false;
      state.status = "success";
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
      state.status = "failed";
    });
    builder.addCase(addNewUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addNewUser.fulfilled, (state, action) => {
      state.data = [...state.data, action.payload];
      state.isLoading = false;
    });
    builder.addCase(addNewUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(handleDelete.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(handleDelete.fulfilled, (state, action) => {
      console.log("silindi", typeof state.user);
      state.data = state.data.filter((post) => post.id !== action.payload);
      state.isLoading = false;
    });
    builder.addCase(handleDelete.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.details = action.payload;
    });
  },
});

export const { editTask } = userSlice.actions;

export default userSlice.reducer;
