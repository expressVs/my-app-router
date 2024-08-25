//  action  reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",   // 空闲的 idle 请求中 loading
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // 相加
    increment: (state) => {
      state.value += 1;
    },
    // 相减
    decrement: (state) => {
      state.value -= 1;
    },
  }
});

// 定义action
export const { increment, decrement } = counterSlice.actions;

// 方便取数据
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;

