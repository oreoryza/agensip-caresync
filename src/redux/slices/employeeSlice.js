import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    {
      id: 1,
      name: "Richaud Beringer",
      jobTitle: "General Practitioner",
      jobCategory: "General",
      status: "Active",
      category: "Full-time",
      address: "6391 Elgin St. Celina, Delaware.",
      phone: "+84 678 890 000",
      email: "email@example.com",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      experience: 15,
      year: 2010,
      rating: 3,
      educations: {
        campus: "Harvard University",
        img: "/employee/campus/harvard.jpg",
        address: "Massachusetts Hall, Cambridge, United States",
      },
      satisfaction: {
        total: 1000,
        happy: 900,
      },
      patients: {
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
            time: "next",
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
            time: "next",
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
            time: "next",
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
      img: "/employee/richaud-beringer.svg",
    },
    {
      id: 2,
      name: "Jacques Lyon",
      jobTitle: "Pathologist",
      jobCategory: "Specialist",
      status: "Active",
      category: "Full-time",
      address: "6391 Elgin St. Celina, Delaware.",
      phone: "+84 678 890 000",
      email: "email@example.com",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      experience: 15,
      year: 2010,
      rating: 5,
      educations: {
        campus: "Harvard University",
        img: "/employee/campus/harvard.jpg",
        address: "Massachusetts Hall, Cambridge, United States",
      },
      satisfaction: {
        total: 1000,
        happy: 900,
      },
      patients: {
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
      img: "/employee/richaud-beringer.svg",
    },
    {
      id: 3,
      name: "Tristram Bernard",
      jobTitle: "Pathologist",
      jobCategory: "Specialist",
      status: "Active",
      category: "Full-time",
      address: "6391 Elgin St. Celina, Delaware.",
      phone: "+84 678 890 000",
      email: "email@example.com",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      experience: 15,
      year: 2010,
      rating: 5,
      educations: {
        campus: "Harvard University",
        img: "/employee/campus/harvard.jpg",
        address: "Massachusetts Hall, Cambridge, United States",
      },
      satisfaction: {
        total: 1000,
        happy: 900,
      },
      patients: {
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
      img: "/employee/richaud-beringer.svg",
    },
    {
      id: 4,
      name: "Ludivine Legrand",
      jobTitle: "Neurologist",
      jobCategory: "Specialist",
      status: "Active",
      category: "Full-time",
      address: "6391 Elgin St. Celina, Delaware.",
      phone: "+84 678 890 000",
      email: "email@example.com",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      experience: 15,
      year: 2010,
      rating: 5,
      educations: {
        campus: "Harvard University",
        img: "/employee/campus/harvard.jpg",
        address: "Massachusetts Hall, Cambridge, United States",
      },
      satisfaction: {
        total: 1000,
        happy: 900,
      },
      patients: {
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
      img: "/employee/richaud-beringer.svg",
    },
    {
      id: 5,
      name: "Mireio Nicolas",
      jobTitle: "General Practitioner",
      jobCategory: "General",
      status: "Off",
      category: "Full-time",
      address: "6391 Elgin St. Celina, Delaware.",
      phone: "+84 678 890 000",
      email: "email@example.com",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      experience: 15,
      year: 2010,
      rating: 5,
      educations: {
        campus: "Harvard University",
        img: "/employee/campus/harvard.jpg",
        address: "Massachusetts Hall, Cambridge, United States",
      },
      satisfaction: {
        total: 1000,
        happy: 900,
      },
      patients: {
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
      img: "/employee/richaud-beringer.svg",
    },
    {
      id: 6,
      name: "Valérian Bret",
      jobTitle: "Neurologist",
      jobCategory: "Specialist",
      status: "Off",
      category: "Full-time",
      address: "6391 Elgin St. Celina, Delaware.",
      phone: "+84 678 890 000",
      email: "email@example.com",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      experience: 15,
      year: 2010,
      rating: 5,
      educations: {
        campus: "Harvard University",
        img: "/employee/campus/harvard.jpg",
        address: "Massachusetts Hall, Cambridge, United States",
      },
      satisfaction: {
        total: 1000,
        happy: 900,
      },
      patients: {
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
      img: "/employee/richaud-beringer.svg",
    },
  ],
  employee: {},
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployee: (state, action) => {
      const employee = state.employees.find(
        (employee) => employee.id === action.payload
      );
      state.employee = employee;
    },
  },
});

export const { setEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
