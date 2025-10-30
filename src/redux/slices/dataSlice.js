import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patients: {
    total: [100, 250, 150, 170, 300, 250, 200],
    genders: {
        male: 90,
        female: 30,
    },
    room: {
        available: 75,
        unavailable: 25
    },
    appointment: [100, 250, 150, 170, 200, 125, 170, 300, 150, 200],
    appointments: [
        {
            id: "ID84110-77851358-1",
            name: "Adam Saddler",
            gender: "Male",
            img: "/patients/adam.png",
            phone: "+84 915 343 643",
            doctor: "James",
            disease: "Headache Disease",
            date: "August 18, 2024",
            start: "02.00 PM",
            end: "03.00 PM",
            status: "In Queue"
        },
        {
            id: "ID84110-77851358-2",
            name: "Aiden Blake",
            gender: "Female",
            img: "/patients/aiden.png",
            phone: "+84 915 343 643",
            doctor: "James",
            disease: "Abdominal Pain",
            date: "August 18, 2024",
            start: "02.00 PM",
            end: "03.00 PM",
            status: "Accepted"
        },
        {
            id: "ID84110-77851358-3",
            name: "Benjamin Lee",
            gender: "Male",
            img: "/patients/adam.png",
            phone: "+84 915 343 643",
            doctor: "James",
            disease: "Swelling",
            date: "August 18, 2024",
            start: "02.00 PM",
            end: "03.00 PM",
            status: "In Queue"
        },
        {
            id: "ID84110-77851358-4",
            name: "Jerome Bellingham",
            gender: "Male",
            img: "/patients/adam.png",
            phone: "+84 915 343 643",
            doctor: "James",
            disease: "Weight Loss",
            date: "August 18, 2024",
            start: "02.00 PM",
            end: "03.00 PM",
            status: "Urgent"
        },
        {
            id: "ID84110-77851358-5",
            name: "Jessicha",
            gender: "Female",
            img: "/patients/aiden.png",
            phone: "+84 915 343 643",
            doctor: "James",
            disease: "Headache Disease",
            date: "August 18, 2024",
            start: "02.00 PM",
            end: "03.00 PM",
            status: "In Queue"
        },
        {
            id: "ID84110-77851358-6",
            name: "Tom Holland",
            gender: "Male",
            img: "/patients/adam.png",
            phone: "+84 915 343 643",
            doctor: "James",
            disease: "Headache Disease",
            date: "August 18, 2024",
            start: "02.00 PM",
            end: "03.00 PM",
            status: "Archive"
        },
    ],
    treatments: [
        {
            name: "Jan",
            recovered: 79,
            under: 11,
        },
        {
            name: "Feb",
            recovered: 80,
            under: 16,
        },
        {
            name: "Mar",
            recovered: 76,
            under: 13,
        },
        {
            name: "Apr",
            recovered: 71,
            under: 13,
        },
        {
            name: "May",
            recovered: 84,
            under: 13,
        },
        {
            name: "Jun",
            recovered: 75,
            under: 15,
        },
        {
            name: "Jul",
            recovered: 80,
            under: 12,
        },
    ]
  },
  ambulances: [50, 60, 70, 90, 80, 100],
  polyclinics: [
    {
        name: "General Practitioners",
        visitors: 200,
        percentage: "increase",
        value: "20%",

    },
    {
        name: "Pediatrics",
        visitors: 320,
        percentage: "decrease",
        value: "25%",

    },
    {
        name: "Cardiology",
        visitors: 100,
        percentage: "increase",
        value: "10%",

    },
    {
        name: "Dermatology",
        visitors: 80,
        percentage: "increase",
        value: "10%",

    },
  ],
  doctors: {
    total: 80,
    //Value and label are used for react-select property
    lists: [
        {
            value: "johnsmith",
            label: "Dr. John Smith",
            name: "John Smith",
            id: "ID84110-77851358",
            img: "/employee/richaud-beringer.svg",
        },
        {
            value: "janedoe",
            label: "Drs. Jane Doe",
            name: "Jane Doe",
            id: "ID84110-77851358",
            img: "/employee/valerian.svg",
        },
        {
            value: "garrywilliam",
            label: "Dr. Garry William",
            name: "Garry William",
            id: "ID84110-77851358",
            img: "/employee/richaud-beringer.svg",
        },
        {
            value: "bradpitt",
            label: "Dr. Brad Pitt",
            name: "Brad Pitt",
            id: "ID84110-77851358",
            img: "/employee/richaud-beringer.svg",
        },
        {
            value: "jessicha",
            label: "Drs. Jessicha",
            name: "Jessicha",
            id: "ID84110-77851358",
            img: "/employee/valerian.svg",
        },
        {
            value: "mayparker",
            label: "Drs. May Parker",
            name: "May Parker",
            id: "ID84110-77851358",
            img: "/employee/valerian.svg",
        },
    ]
  },
  nurses: {
    total: 100,
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateAppointmentStatus: (state, action) => {
      const { id, status } = action.payload;
      const appointment = state.patients.appointments.find(app => app.id === id);
      if (appointment) {
        appointment.status = status;
      }
    },
  },
});

export const { updateAppointmentStatus } = dataSlice.actions;
export default dataSlice.reducer;
