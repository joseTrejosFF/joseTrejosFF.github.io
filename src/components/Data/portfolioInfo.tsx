import choreTrackerDark from "assets/images/choreTracker/choreTrackerDark.png";
import choreTrackerLight from "assets/images/choreTracker/choreTrackerLight.png";
import resume from "assets/images/resume/resume.png";

import dashboard from "assets/images/financeTracker/Dashboard.png";

export const porfolioInfo = [
  {
    title: "Chore Tracker",
    pictureRepo: choreTrackerDark,
    pictureRepo2: choreTrackerLight,
    figcaption: "Chore Tracker logo in dark and light mode.",
    altRepo: "Chore Tracker repository",
    liveDemoUrl: "#",
    readMoreURL: "/portfolio/ct",
    shortDesc:
      "The goal of this personal project is to measure the time it takes to finish any kind of chore . I had the necessity to know how much time it takes me to finish the plethora of chores around my house. Since covid restriction took effect around 2019, I spend more of my time at home...",
  },
  {
    title: "Finance Tracker",
    pictureRepo: dashboard,
    figcaption: "Dashboard made on Figma.",
    altRepo: "Finance Tracker repository",
    figmaURL:
      "https://www.figma.com/file/WLWJPgLMB6GknlPPQbmja1/FT?node-id=0%3A1",
    readMoreURL: "/portfolio/ft",
    shortDesc:
      "This is a work-in-progress but I could tell you. This will be one of the most ambitious personal projects that I ever plan to do.  The main goal is to keep track of my income, expenses, investments, and forecast. All this data will be presented on charts...",
  },
  {
    title: "Resume",
    pictureRepo: resume,
    figcaption: "Resume Greeting.",
    altRepo: "Resume repository",
    readMoreURL: "/portfolio/re",
    shortDesc:
      "This web site born as the necessity to show and explain the goal of my personal projects as well as a tool to help me find a new job. I wanted to show more than the source code, I want to tell you a story of what does it do, how and why. Tell you what I learned and how I overcome the many obstacles I faced. ",
  },
];
