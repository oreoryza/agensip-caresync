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
      unavailable: 25,
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
        status: "In Queue",
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
        status: "Accepted",
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
        status: "In Queue",
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
        status: "Urgent",
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
        status: "In Queue",
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
        status: "Archive",
      },
      {
        id: "ID84110-77851358-7",
        name: "Jerome Bellingham",
        gender: "Male",
        img: "/patients/adam.png",
        phone: "+84 915 343 643",
        doctor: "James",
        disease: "Weight Loss",
        date: "August 18, 2024",
        start: "02.00 PM",
        end: "03.00 PM",
        status: "Urgent",
      },
      {
        id: "ID84110-77851358-8",
        name: "Jessicha",
        gender: "Female",
        img: "/patients/aiden.png",
        phone: "+84 915 343 643",
        doctor: "James",
        disease: "Headache Disease",
        date: "August 18, 2024",
        start: "02.00 PM",
        end: "03.00 PM",
        status: "In Queue",
      },
      {
        id: "ID84110-77851358-9",
        name: "Tom Holland",
        gender: "Male",
        img: "/patients/adam.png",
        phone: "+84 915 343 643",
        doctor: "James",
        disease: "Headache Disease",
        date: "August 18, 2024",
        start: "02.00 PM",
        end: "03.00 PM",
        status: "Archive",
      },
    ],
    treatments: {
      month: [
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
      ],
      week: [
        {
          name: "Week 1",
          recovered: 19,
          under: 7,
        },
        {
          name: "Week 2",
          recovered: 28,
          under: 10,
        },
        {
          name: "Week 3",
          recovered: 26,
          under: 9,
        },
        {
          name: "Week 4",
          recovered: 17,
          under: 8,
        },
        {
          name: "Week 5",
          recovered: 28,
          under: 10,
        },
        {
          name: "Week 6",
          recovered: 26,
          under: 9,
        },
        {
          name: "Week 7",
          recovered: 17,
          under: 8,
        },
      ],
      day: [
        {
          name: "Mon",
          recovered: 9,
          under: 3,
        },
        {
          name: "Tue",
          recovered: 5,
          under: 3,
        },
        {
          name: "Wed",
          recovered: 6,
          under: 3,
        },
        {
          name: "Thu",
          recovered: 7,
          under: 3,
        },
        {
          name: "Fri",
          recovered: 4,
          under: 3,
        },
        {
          name: "Sat",
          recovered: 7,
          under: 4,
        },
        {
          name: "Sun",
          recovered: 8,
          under: 2,
        },
      ],
    },
  },
  ambulances: [50, 60, 70, 90, 80, 100],
  polyclinics: {
    month: [
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
    week: [
      {
        name: "General Practitioners",
        visitors: 70,
        percentage: "increase",
        value: "20%",
      },
      {
        name: "Pediatrics",
        visitors: 100,
        percentage: "decrease",
        value: "25%",
      },
      {
        name: "Cardiology",
        visitors: 50,
        percentage: "increase",
        value: "10%",
      },
      {
        name: "Dermatology",
        visitors: 32,
        percentage: "increase",
        value: "10%",
      },
    ],
    day: [
      {
        name: "General Practitioners",
        visitors: 12,
        percentage: "increase",
        value: "20%",
      },
      {
        name: "Pediatrics",
        visitors: 20,
        percentage: "decrease",
        value: "25%",
      },
      {
        name: "Cardiology",
        visitors: 10,
        percentage: "increase",
        value: "10%",
      },
      {
        name: "Dermatology",
        visitors: 8,
        percentage: "increase",
        value: "10%",
      },
    ],
  },
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
    ],
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
      const appointment = state.patients.appointments.find(
        (app) => app.id === id
      );
      if (appointment) {
        appointment.status = status;
      }
    },
  },
});

export const { updateAppointmentStatus } = dataSlice.actions;
export default dataSlice.reducer;
