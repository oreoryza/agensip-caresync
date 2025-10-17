import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patients: {
    total: [100, 250, 150, 170, 300, 250, 200],
    room: {
        available: 75,
        unavailable: 25
    },
    appointment: [100, 250, 150, 170, 200, 125, 170, 300, 150, 200],
    appointments: [
        {
            id: "ID84110-77851358",
            name: "Adam Saddler",
            img: "/patients/dianne-russell.jpg",
            phone: "+84 915 343 643",
            doctor: "James",
            date: "August 18, 2024",
            start: "02.00 PM",
            end: "03.00 PM",
            status: "In Queue"
        },
        {
            id: "ID84110-77851358",
            name: "Aiden Blake",
            img: "/patients/dianne-russell.jpg",
            phone: "+84 915 343 643",
            doctor: "James",
            date: "August 18, 2024",
            start: "02.00 PM",
            end: "03.00 PM",
            status: "Accepted"
        },
        {
            id: "ID84110-77851358",
            name: "Benjamin Lee",
            img: "/patients/dianne-russell.jpg",
            phone: "+84 915 343 643",
            doctor: "James",
            date: "August 18, 2024",
            start: "02.00 PM",
            end: "03.00 PM",
            status: "In Queue"
        },
        {
            id: "ID84110-77851358",
            name: "Jerome Bellingham",
            img: "/patients/dianne-russell.jpg",
            phone: "+84 915 343 643",
            doctor: "James",
            date: "August 18, 2024",
            start: "02.00 PM",
            end: "03.00 PM",
            status: "Urgent"
        },
        {
            id: "ID84110-77851358",
            name: "Jessicha",
            img: "/patients/dianne-russell.jpg",
            phone: "+84 915 343 643",
            doctor: "James",
            date: "August 18, 2024",
            start: "02.00 PM",
            end: "03.00 PM",
            status: "In Queue"
        },
        {
            id: "ID84110-77851358",
            name: "Tom Holland",
            img: "/patients/dianne-russell.jpg",
            phone: "+84 915 343 643",
            doctor: "James",
            date: "August 18, 2024",
            start: "02.00 PM",
            end: "03.00 PM",
            status: "Archive"
        },
    ]
  },
  ambulances: [50, 60, 70, 90, 80, 100]
};

const dataSlice = createSlice({
  name: "data",
  initialState,
});

export default dataSlice.reducer;
