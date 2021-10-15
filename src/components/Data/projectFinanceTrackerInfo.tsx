import dashboard from "assets/images/financeTracker/Dashboard.png";
import postgreSql from "assets/images/financeTracker/Postgresql_elephant.svg";
import colorScheme from "assets/images/financeTracker/ColorScheme.png";

export const financeTrackerInfo = {
  projectTitle: "Finance Tracker",
  intro: {
    paragraphs: [
      "This will be one of the most ambitious personal projects that I ever plan to do. The main goal is to keep track of my income, expenses, investments, and forecast based on expenditure patterns, fixed and recurring income/expenses, and the list goes on.",
      "All this data will be presented in interactive charts. There will be a dashboard with all the summarized information per month and other sections for a more detailed analysis.",
    ],
    figure: {
      img: dashboard,
      alt: "Dashboard in light mode",
      title: "Dashboard in light mode - Figma",
      caption: (
        <a
          href="https://www.figma.com/file/WLWJPgLMB6GknlPPQbmja1/FT?node-id=0%3A1"
          target="_blank"
          rel="noreferrer"
          title="Go to Figma"
        >
          Dashboard in light mode. Go to Figma
        </a>
      ),
    },
  },
  projectPurpose: {
    title: "Project Purpose",
    paragraphs: [
      "You are probably thinking that any spreadsheet could do this, in fact, yes they can. I have been using LibreOffice, Google Sheets, and MS Excel for the past few years and all of them have pros and cons.",
      "So, why not take some inspiration from them and make one app that fits my needs and will free me from inputting by hand all the data whenever I have to do my finances.",
    ],
  },
  chosenWebStack: {
    title: "Possible Web Stack Configuration",
    paragraphs: [
      "I have been using a spreadsheet for the past several years, so I know that the data have a tabular form. But I am still investigating which type of database will be better for my application. So far, I am leaning towards an SQL database.",
      "I think it will work fine for storing my financial records. These are some considerations about my requirement and data being stored.",
      "Most of the data have a defined structure and the strength of the relational database is in its use of tables so this checks in.",
      "It will serve only one user with a few hundreds reads/writes per month. So, scalability is not critical. Also, there is no problem if data isn’t available instantly or if there is some down-time. In other words, data-availability is not critical.",
      "Finally, it would be a good opportunity to learn how to implement PostgreSQL with node. At this point a PERN Stack (PostgreSQL, Express, React, and Node) looks promising.",
      "The possible Web Stack Configuration would be as follows:",
    ],
    tools: [
      "PostgreSQL as the database.",
      "Express as the web framework.",
      "React as the client-side.",
      "Node as the webserver.",
    ],
    figure: {
      img: postgreSql,
      alt: "PostgreSQL Logo",
      title: "PostgreSQL Logo",
      caption: (
        <a
          title="Daniel Lundin, PostgreSQL License &lt;https://www.postgresql.org/about/licence/&gt;, via Wikimedia Commons"
          href="https://commons.wikimedia.org/wiki/File:Postgresql_elephant.svg"
        >
          PostgreSQL Logo. Wikimedia Commons.
        </a>
      ),
    },
  },
  ChallengesAndDif: {
    title: "Challenges and Difficulties",
    paragraphs: [
      "This is the time that I am using a graphics editing tool called Figma. Since the  user-interface design is not my best. I have been reading how to create typography and color guides to keep my UI consistent.",
      "I have never worked with PostgreSQL before, so I will need to go through its documentation and experience first-hand how to make it work.",
      "I will create for the first time interactive and responsive charts. I am going to use the Chart.js library to make this possible.",
    ],
    figure: {
      img: colorScheme,
      alt: "Color Guide - Figma ",
      title: "Color Guide - Figma",
      caption: (
        <a
          href="https://www.figma.com/file/WLWJPgLMB6GknlPPQbmja1/FT?node-id=0%3A1"
          target="_blank"
          rel="noreferrer"
          title="Go to this Figma Project"
        >
          Color Guide. Go to Figma
        </a>
      ),
    },
  },
  lessonsLearned: {
    title: "Lessons Learned So Far",
    paragraphs: [
      "Never knew that picking some colors and shades were so hard. Even more, set the font-sizes prior to coding. In the past, I did it by trial and error. As you can guess, my apps weren’t so pleasant to watch. From now on I will continue to use figma to prototype my apps before starting to code.",
      "I never thought I would be capable of making a website look nice. I am still learning and getting better every day.",
    ],
  },
};
