import choreTrackerDark from 'assets/images/choreTracker/choreTrackerDark.png';
import choreTrackerLight from 'assets/images/choreTracker/choreTrackerLight.png';
import portfolio from 'assets/images/portfolio/portfolio.png';
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
      'The goal of this personal project is to measure the time it takes to complete various chores. I felt the need to understand how much time I spend on the myriad of tasks around my house, especially since COVID restrictions came into effect around 2019, resulting in more time spent at home...',
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
      "While this project is still a work in progress, I'm excited to share my plans for what promises to be one of my most ambitious personal projects. The primary goal is to meticulously track my income, expenses, investments, and forecasts, with all this data presented in insightful charts...",
  },
  {
    title: 'Portfolio',
    urlRepo: 'https://github.com/joseTrejosFF/joseTrejosFF.github.io',
    pictureRepo: portfolio,
    figcaption: 'Portfolio - Greeting Section.',
    altRepo: 'Portfolio repository',
    readMoreURL: '/portfolio/re',
    shortDesc:
      'I enjoy not only showcasing and explaining my personal projects but also weaving a narrative beyond the source code. I want to share the story of what the project does, how and why it came to be, along with the lessons learned and the strategies I employed to overcome various challenges...',
  },
];
