/** @format */

const { createSlice, nanoid } = require('@reduxjs/toolkit');

const initialState = {
  users: [],
};

const Slice = createSlice({
  name: 'addUserSlice',
  initialState,
  reducers: {
    addUser: (state, action) => {
      // console.log(action.payload);
      const data = {
        id: nanoid,
        name: action.payload,
      };
      state.users.push(data);
    },
  },
});

export const { addUser } = Slice.actions;
export default Slice.reducer;
