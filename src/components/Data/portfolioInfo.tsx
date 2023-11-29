import choreTrackerDark from 'assets/images/choreTracker/choreTrackerDark.png';
import choreTrackerLight from 'assets/images/choreTracker/choreTrackerLight.png';
import resume from 'assets/images/resume/resume.png';
import dashboard from 'assets/images/financeTracker/Dashboard.png';

export const porfolioInfo = [
  {
    title: 'Chore Tracker',
    urlRepo: 'https://github.com/joseTrejosFF/ChoreTracker',
    pictureRepo: choreTrackerDark,
    pictureRepo2: choreTrackerLight,
    figcaption: 'Chore Tracker Logo in Dark and Light mode.',
    altRepo: 'Chore Tracker repository',
    readMoreURL: '/portfolio/ct',
    shortDesc:
      'The goal of this personal project is to measure the time it takes to finish any kind of chore. I had the necessity to know how much time it takes me to finish the plethora of chores around my house. Since covid restriction took effect around 2019, I spend more of my time at home... ',
  },
  {
    title: 'Finance Tracker',
    pictureRepo: dashboard,
    figcaption: 'Dashboard made on Figma.',
    altRepo: 'Finance Tracker repository',
    figmaURL:
      'https://www.figma.com/file/WLWJPgLMB6GknlPPQbmja1/FT?node-id=0%3A1',
    readMoreURL: '/portfolio/ft',
    shortDesc:
      'This is a work-in-progress but I could tell you. This will be one of the most ambitious personal projects that I ever plan to do. The main goal is to keep track of my income, expenses, investments, and forecast. All this data will be presented on charts... ',
  },
  {
    title: 'Resume',
    urlRepo: 'https://github.com/joseTrejosFF/joseTrejosFF.github.io',
    pictureRepo: resume,
    figcaption: 'Resume - Greeting Section.',
    altRepo: 'Resume repository',
    readMoreURL: '/portfolio/re',
    shortDesc:
      'This web site was born as the necessity to show and explain the goal of my personal projects. I want to show more than the source code, I want to tell you a story of what it does, how and why. As well as what I learned and how I overcame the many obstacles I faced... ',
  },
];
