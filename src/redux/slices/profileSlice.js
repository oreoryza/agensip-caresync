import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: 
    {
      name: "Guy Hawkins",
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
      salary: "15K",
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
    }
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
});

export default profileSlice.reducer;
