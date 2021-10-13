import allCardLight from "assets/images/choreTracker/allCardsLight.png";
import mernLogo from "assets/images/choreTracker/mernLogo.png";
import DBmodel2 from "assets/images/choreTracker/DBmodel2.png";

export const choreTrackerInfo = {
  projectTitle: "Chore Tracker",
  intro: {
    paragraphs: [
      "This is one of my favorite personal projects. A tool to keep track of how much time I spend doing chores at home. You wouldn't believe me if I told you that thanks to this tool my wife and I bought our first dishwasher machine.",
    ],
    figure: {
      img: allCardLight,
      alt: "Card section",
      title: "Card section in light mode",
      caption: "Card section in light mode",
    },
  },
  projectPurpose: {
    title: "Project Purpose",
    paragraphs: [
      "You know that something is wrong when you feel that doing some chores at home take the most part of your day. So, what did I do? I started by taking notes on a whiteboard of every chore that I did on that day, each one of them had their starting and ending times. A few days later I learned that it was really tedious to take every single chore, get its elapse time and then add all chores that were the same to finally have their total duration. Clearly, this isn't gonna work.",
      "Then I thought, I'll use a spreadsheet. Oh boy. that was worse. Why? first, I had to input each chore each time I started one otherwise, have to write them down on something, like a piece of paper or on the whiteboard that was using at the beginning. Now, I see that this       problem will require something more robust. so, I started to look for online tools on the internet, windows, and android store. I test several of them, but to make a long story short. They were designed for other purposes, most of them have a ton of options that I don't need, basically, they weren't what I was looking for.",
      "Finally, it's time to use my secret weapon, it's time to code a tool that will let me know what chores take the most of my time, and now the journey begins...",
    ],
  },
  chosenWebStack: {
    title: "Chosen Web Stack",
    paragraphs: [
      "After seeing so many online tools, I had a glimpse of what my app should do and looks like. In order to accomplish it, I will need to code a full-stack application. So, I chose a MERN stack.",
    ],
    tools: [
      "MongoDB as the document database.",
      "Express as the web framework.",
      "React as the client-side.",
      "Node as the webserver.",
    ],
    figure: {
      img: mernLogo,
      alt: "MERN Stack",
      title: "MongoDB, Express, React, Node",
      caption: (
        <>
          <a
            href="https://commons.wikimedia.org/wiki/File:MERN-logo.png"
            target="_blank"
            rel="noreferrer"
          >
            Wikimedia Commons -
          </a>
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0"
            target="_blank"
            rel="noreferrer"
          >
            - License CC BY-SA 4.0
          </a>
        </>
      ),
    },
  },
  ChallengesAndDif: {
    title: "Challenges and Difficulties",
    paragraphs: [
      "I had a lot of challenges. But the most significant ones were related to design and I ain't talking just about graphical design.",
      " The database schema was changed many times because later on, I found that some values are needed on the front-end and there is no way around it.",
      "Learning how to use an object data modeling like Mongoose and TypeScript was hard to implement.",
      "Know which API calls I have to design/create in order to have a fully functional front-end.",
      "The front-end file structure was a pain to design, had to move several files around and group them in folders like containers and components until I have something that I could understand and didn't get lost looking for a react component.",
      "In React I created two contexts using the useReducer hook. Like in the database schema, had to change/add/delete/modify several keys from the initial state and also on the dispatch actions (functions).",
      " So, basically, anything that involves design something from scratch sets a new whole list of challenges.",
    ],
    figure: {
      img: DBmodel2,
      alt: "Database schema used",
      title: "Database Schema",
      caption: "Database schema",
    },
  },
  lessonsLearned: {
    title: "Lessons Learned",
    paragraphs: [
      "Design first, then code. I still remember when I was designing while coding and then had to delete everything because it didn't receive or return what it is needed.",
      "Now I feel more confident working on the backend with Nodejs, Moongoose, and Express. Doing API calls to a non-SQL database like MongoDB seems easier now. After dealing with the useReducer hook and two different contexts whose data is needed to fulfill the same task is more manageable than just using the useState hook.",
      "I feel that I got a stronger knowledge after working with so many state/stateless functional components in react. Being able to truly create reusable components and also avoiding 'prop drilling' was a big achievement for me.",
    ],
  },
};
