import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patients: [
    {
      id: 1,
      idcode: "ID292206541",
      name: "Ralph Edwards",
      status: "Active",
      img: "/patients/adam.png",
      gender: "Male",
      ages: 20,
      disease: "Mild fever",
      rating: 5,
      treatment: "Outpatient",
      payment: "Pending",
      address: "6391 Elgin St. Celina, Delaware.",
      email: "sara.cruz@example.com",
      phone: "+84 678 890 000",
      educations: {
        campus: "Harvard University",
        img: "/employee/campus/harvard.jpg",
        address: "Massachusetts Hall, Cambridge, United States",
      },
      doctors: {
        lists: [
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
        ],
      },
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      sheet: [
        {
          disease: "Mild cough",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          date: "May 6, 2024",
          status: "Recovered",
        },
        {
          disease: "Migrain",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          date: "May 6, 2024",
          status: "Recovered",
        },
      ]
    },
    {
      id: 2,
      idcode: "ID292206542",
      name: "Ralph Edwards",
      status: "Active",
      img: "/patients/adam.png",
      gender: "Male",
      ages: 21,
      disease: "Mild fever",
      rating: 5,
      treatment: "Inpatient",
      payment: "Pending",
      address: "6391 Elgin St. Celina, Delaware.",
      email: "sara.cruz@example.com",
      phone: "+84 678 890 000",
      educations: {
        campus: "Harvard University",
        img: "/employee/campus/harvard.jpg",
        address: "Massachusetts Hall, Cambridge, United States",
      },
      doctors: {
        lists: [
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
        ],
      },
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      sheet: [
        {
          disease: "Mild cough",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          date: "May 6, 2024",
          status: "Recovered",
        },
        {
          disease: "Migrain",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          date: "May 6, 2024",
          status: "Recovered",
        },
      ]
    },
    {
      id: 3,
      idcode: "ID292206543",
      name: "Ralph Edwards",
      status: "Active",
      img: "/patients/adam.png",
      gender: "Male",
      ages: 18,
      disease: "Mild fever",
      rating: 5,
      treatment: "Emergency",
      payment: "Paid",
      address: "6391 Elgin St. Celina, Delaware.",
      email: "sara.cruz@example.com",
      phone: "+84 678 890 000",
      educations: {
        campus: "Harvard University",
        img: "/employee/campus/harvard.jpg",
        address: "Massachusetts Hall, Cambridge, United States",
      },
      doctors: {
        lists: [
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
        ],
      },
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      sheet: [
        {
          disease: "Mild cough",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          date: "May 6, 2024",
          status: "Recovered",
        },
        {
          disease: "Migrain",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          date: "May 6, 2024",
          status: "Recovered",
        },
      ]
    },
    {
      id: 4,
      idcode: "ID292206544",
      name: "Ralph Edwards",
      status: "Active",
      img: "/patients/adam.png",
      gender: "Male",
      ages: 13,
      disease: "Mild fever",
      rating: 5,
      treatment: "Surgical",
      payment: "Partially Paid",
      address: "6391 Elgin St. Celina, Delaware.",
      email: "sara.cruz@example.com",
      phone: "+84 678 890 000",
      educations: {
        campus: "Harvard University",
        img: "/employee/campus/harvard.jpg",
        address: "Massachusetts Hall, Cambridge, United States",
      },
      doctors: {
        lists: [
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
        ],
      },
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      sheet: [
        {
          disease: "Mild cough",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          date: "May 6, 2024",
          status: "Recovered",
        },
        {
          disease: "Migrain",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          date: "May 6, 2024",
          status: "Recovered",
        },
      ]
    },
    {
      id: 5,
      idcode: "ID292206545",
      name: "Ralph Edwards",
      status: "Active",
      img: "/patients/adam.png",
      gender: "Male",
      ages: 48,
      disease: "Mild fever",
      rating: 5,
      treatment: "Intensive",
      payment: "Pending",
      address: "6391 Elgin St. Celina, Delaware.",
      email: "sara.cruz@example.com",
      phone: "+84 678 890 000",
      educations: {
        campus: "Harvard University",
        img: "/employee/campus/harvard.jpg",
        address: "Massachusetts Hall, Cambridge, United States",
      },
      doctors: {
        lists: [
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
        ],
      },
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      sheet: [
        {
          disease: "Mild cough",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          date: "May 6, 2024",
          status: "Recovered",
        },
        {
          disease: "Migrain",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          date: "May 6, 2024",
          status: "Recovered",
        },
      ]
    },
    {
      id: 6,
      idcode: "ID292206546",
      name: "Ralph Edwards",
      status: "Active",
      img: "/patients/adam.png",
      gender: "Male",
      ages: 24,
      disease: "Mild fever",
      rating: 5,
      treatment: "Outpatient",
      payment: "Paid",
      address: "6391 Elgin St. Celina, Delaware.",
      email: "sara.cruz@example.com",
      phone: "+84 678 890 000",
      educations: {
        campus: "Harvard University",
        img: "/employee/campus/harvard.jpg",
        address: "Massachusetts Hall, Cambridge, United States",
      },
      doctors: {
        lists: [
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
          {
            name: "Dianne Russell",
            id: "ID089745096C4",
            img: "/patients/dianne-russell.jpg",
            time: "week",
          },
        ],
      },
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      sheet: [
        {
          disease: "Mild cough",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          date: "May 6, 2024",
          status: "Recovered",
        },
        {
          disease: "Migrain",
          note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          date: "May 6, 2024",
          status: "Recovered",
        },
      ]
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
