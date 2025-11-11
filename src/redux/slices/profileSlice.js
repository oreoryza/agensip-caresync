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
        happy: 800,
      },
      tasks: [
        {
          name: "Staff Scheduling Workshop",
          description: "Learn to create efficient staff schedules for 24/7 hospital operations.",
          date: "February 16, 2025",
          start: "02:00 PM",
          end: "03:00 PM",
        },
        {
          name: "Staff Scheduling Workshop",
          description: "Learn to create efficient staff schedules for 24/7 hospital operations.",
          date: "February 16, 2025",
          start: "02:00 PM",
          end: "03:00 PM",
        },
        {
          name: "Staff Scheduling Workshop",
          description: "Learn to create efficient staff schedules for 24/7 hospital operations.",
          date: "February 16, 2025",
          start: "02:00 PM",
          end: "03:00 PM",
        },
        {
          name: "Staff Scheduling Workshop",
          description: "Learn to create efficient staff schedules for 24/7 hospital operations.",
          date: "February 16, 2025",
          start: "02:00 PM",
          end: "03:00 PM",
        },
      ],
      attendance: {
        month: {
          mon: {
            twoAm: 2,
            eightAm: 1,
            twoPm: 3,
            eightPm: 4,
          },
          tue: {
            twoAm: 1,
            eightAm: 1,
            twoPm: 3,
            eightPm: 0,
          },
          wed: {
            twoAm: 2,
            eightAm: 3,
            twoPm: 2,
            eightPm: 4,
          },
          thu: {
            twoAm: 0,
            eightAm: 1,
            twoPm: 3,
            eightPm: 1,
          },
          fri: {
            twoAm: 2,
            eightAm: 2,
            twoPm: 0,
            eightPm: 4,
          },
        },
        week: {
          mon: {
            twoAm: 1,
            eightAm: 2,
            twoPm: 4,
            eightPm: 3,
          },
          tue: {
            twoAm: 0,
            eightAm: 3,
            twoPm: 1,
            eightPm: 2,
          },
          wed: {
            twoAm: 3,
            eightAm: 4,
            twoPm: 2,
            eightPm: 1,
          },
          thu: {
            twoAm: 2,
            eightAm: 0,
            twoPm: 4,
            eightPm: 3,
          },
          fri: {
            twoAm: 4,
            eightAm: 1,
            twoPm: 3,
            eightPm: 2,
          },
        },
      },
      img: "/employee/richaud-beringer.svg",
    }
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
});

export default profileSlice.reducer;
