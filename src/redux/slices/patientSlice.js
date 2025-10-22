import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patients: [
    {
      id: "ID292206548",
      name: "Ralph Edwards",
      status: "Active",
      img: "/patients/adam.png",
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
    {
      id: "ID292206548",
      name: "Ralph Edwards",
      status: "Active",
      img: "/patients/adam.png",
      gender: "Male",
      ages: 21,
      treatment: "Inpatient",
      payment: "Pending",
      address: "6391 Elgin St. Celina, Delaware.",
      email: "sara.cruz@example.com",
      phone: "+84 678 890 000",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      
    },
    {
      id: "ID292206548",
      name: "Ralph Edwards",
      status: "Active",
      img: "/patients/adam.png",
      gender: "Male",
      ages: 18,
      treatment: "Emergency",
      payment: "Paid",
      address: "6391 Elgin St. Celina, Delaware.",
      email: "sara.cruz@example.com",
      phone: "+84 678 890 000",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      
    },
    {
      id: "ID292206548",
      name: "Ralph Edwards",
      status: "Active",
      img: "/patients/adam.png",
      gender: "Male",
      ages: 13,
      treatment: "Surgical",
      payment: "Partially Paid",
      address: "6391 Elgin St. Celina, Delaware.",
      email: "sara.cruz@example.com",
      phone: "+84 678 890 000",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      
    },
    {
      id: "ID292206548",
      name: "Ralph Edwards",
      status: "Active",
      img: "/patients/adam.png",
      gender: "Male",
      ages: 48,
      treatment: "Intensive",
      payment: "Pending",
      address: "6391 Elgin St. Celina, Delaware.",
      email: "sara.cruz@example.com",
      phone: "+84 678 890 000",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      
    },
    {
      id: "ID292206548",
      name: "Ralph Edwards",
      status: "Active",
      img: "/patients/adam.png",
      gender: "Male",
      ages: 24,
      treatment: "Outpatient",
      payment: "Paid",
      address: "6391 Elgin St. Celina, Delaware.",
      email: "sara.cruz@example.com",
      phone: "+84 678 890 000",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      
    },
  ],
  patient: {}
};

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    setPatient: (state, action) => {
      const patient = state.patients.find(
        (patient) => patient.id === action.payload
      );
      state.patient = patient;
    },
  },
});

export const { setPatient } = patientsSlice.actions;
export default patientsSlice.reducer;
