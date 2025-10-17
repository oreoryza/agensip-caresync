import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patients: [
    {
      id: "ID292206548",
      name: "Ralph Edwards",
      img: "",
      gender: "Male",
      ages: 20,
      treatment: "Outpatient",
      payment: "Pending",
      address: "6391 Elgin St. Celina, Delaware.",
      email: "sara.cruz@example.com",
      phone: "+84 678 890 000",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      
    },
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
});

export default dataSlice.reducer;
