import tmpImg from "assets/images/tmp/example-portfolio-screenshot2.jpg";
import mobilehomeDarkModeMenu from "assets/images/resume/mobilehomeDarkModeMenu.png";
import reactIcon from "assets/images/resume/reactIcon.svg";
import darkThemeHook from "assets/images/resume/darkThemeHook.png";

export const webResumeInfo = {
  projectTitle: "Web Resume",
  intro: {
    paragraphs: [
      "Why did I take the time to design and code a whole web from scratch just to present myself to people instead of using one of the many social media websites that are already available on the internet? I could write a nice simple answer with some technical jargon to answer this question, but I think there is a better way. Let me show you what I mean.",
    ],
    figure: {
      img: mobilehomeDarkModeMenu,
      alt: "Navigation menu on a mobile-version in dark mode",
      title: "Navigation menu on a mobile-version in dark mode",
      caption: "Navigation menu on a mobile-version in dark mode",
    },
  },
  projectPurpose: {
    title: "Project Purpose",
    paragraphs: [
      "All those social media websites are a safe beat when it comes to presenting yourself to the world. But it would be better to have your own website, make it that way you want and show your true potential so people can have a better idea of you.",
      "That is why I created this website. I want to show you more than some simple screenshots or a bunch of text files in a folder (a.k.a. source code). I want to tell you the whole thing, what I learned, the tools I used and how I overcame the many obstacles I faced during development.",
    ],
  },
  chosenWebStack: {
    title: "Chosen Tools",
    paragraphs: [
      "I remember the struggle  when I was creating the front-end of a big website with only HTML, CSS and JavaScript. There was a lot of duplicate code everywhere, new changes were difficult to implement, in other words maintainability was awful.",
      "Then my wife told me, “you should use React!” (yeap, she's also a software developer) and  I did take her suggestion. It took me a while to learn it, and it has been my de facto front-end library since then.",
      "Along the way I have found really good tools that make working with react even better like Style-Components.  CSS is beautiful and if you combine it with JS in a component base fashion you'll get the most beautiful and reusable CSS ever.",
      "A good looking application is key, and to achieved this is an efficient way I picked Styled components also I am planning to add more projects, so I know this repository could grow even more and maintainability could be a problem in the long run, that is why I choose to use typescript.",
    ],
    tools: ["React as the client-side", "AWS as the web-hosting"],
    figure: {
      img: reactIcon,
      alt: "React logo",
      title: "React logo",
      caption: (
        <a
          title="Facebook, Public domain, via Wikimedia Commons"
          href="https://commons.wikimedia.org/wiki/File:React-icon.svg"
          target="_blank"
          rel="noreferrer"
        >
          Wikimedia Commons - React Logo
        </a>
      ),
    },
  },
  ChallengesAndDif: {
    title: "Challenges and Difficulties",
    paragraphs: [
      "A database will be an overkill solution for a website that only shows information that will not change in the near future. I came up with the idea of storing the information on arrays, objects or a combination of both in a single folder called “Data”. This allows to have all the information in a centralized place and keep the react component small and reusables.",
      "I have done dark themes for other projects but never using styled-components. For this website, I used the “ThemeProvider” component to set a theme to all React components. This implementation was different from what I was used to doing but in the end it was way easier and cleaner than my previous implementations.",
      "Achieving a responsive web design is hard, but not impossible. I had to spend a good time looking for wired looking sections on different screen sizes. Nowadays a mobile version is not a plus, it's a must have.",
    ],
    figure: {
      img: darkThemeHook,
      alt: "Custom react-hook code for managing the Dark-theme",
      title: "Custom react-hook code for managing the Dark-theme ",
      caption: "Custom react-hook code for managing the Dark-theme",
    },
  },
  lessonsLearned: {
    title: "Lessons Learned",
    paragraphs: [
      "Every time that I work with React I learn something new, and this time was no exception. Using custom hooks helped me to keep the codebase clean and declarative.",
      "The implementation of the helper function called “createGlobalStyle” from Style-Components was very useful to set the base CSS for the whole website.",
      "I feel more confident when It’s time to  implement a Dark-theme or the mobile version. All this was pretty straight forward thanks to the component base nature of React and Styled-components.",
    ],
  },
};
