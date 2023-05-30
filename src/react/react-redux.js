// store/indexe.js
import { createStore, configureStore } from "@reduxjs/toolkit";
const stuSlice = createStore({
  name: "stu",
  initialState: {
    name: "张三",
    age: 18,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeAge(state, action) {
      state.age = action.payload;
    },
    getAge(state) {
      return state.age;
    },
  },
});

export const { changeName, changeAge, getAge } = stuSlice.actions;
const store = configureStore({
  reducer: {
    student: stuSlice.reducer,
  },
});
export default store;

// demo
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeAge, getAge } from "./store";
function StoreDome() {
  const student = useSelector((state) => state.student);
  const dispatch = useDispatch();
  return (
    <div>
      <div>姓名：{student.name}</div>
      <div>年龄：{student.age}</div>
      <button
        onClick={() => {
          dispatch(changeName("李四"));
        }}
      >
        修改姓名
      </button>
    </div>
  );
}
