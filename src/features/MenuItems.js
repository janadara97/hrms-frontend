import { createSlice } from "@reduxjs/toolkit";

export const menuItemsSlice = createSlice({
  name: "menuItems",
  initialState: {
    value: [
      {
        id: 1,
        name: "Dashboard",
        to: "/",
        exact: true
      },
      {
        id: 2,
        name: "Leave",
        to: "/leave",
        exact: true,
        subMenuItems: [
          {
            id: 1,
            name: "Sub 1",
            to: "/leave/sub1",
          },
          {
            id: 2,
            name: "Sub 2",
            to: "/leave/sub2",
          },
          {
            id: 3,
            name: "Sub 3",
            to: "/leave/sub3",
          },
          {
            id: 4,
            name: "Sub 4",
            to: "/leave/sub4",
          }
        ]
      },
      {
        id: 3,
        name: "Profile",
        to: "/profile",
        exact: true
      },
      {
        id: 4,
        name: "Performance",
        to: "/perfomrance",
        exact: true
      }
    ]
  },
  reducers: {
    addMenuItems: (state) => {
      state.value += 1;
    }
  },
});

export default menuItemsSlice.reducer;