// ─── PROJECT DATA ───────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: "Profile Page",
    desc: "My very first HTML page — a personal profile with info about me, styled with CSS.",
    emoji: "🧑‍💻",
    bg: "#EEF2FF",
    tags: ["html", "css"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Data Table Page",
    desc: "An HTML table showing class schedules with styled borders, merging cells using colspan and rowspan.",
    emoji: "📋",
    bg: "#FFF0F3",
    tags: ["html", "css"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Quiz App",
    desc: "A 10-question JavaScript quiz with a timer, score tracker, and final results page.",
    emoji: "❓",
    bg: "#F0FFF8",
    tags: ["js"],
    github: "#",
    live: "#"
  },
  {
    id: 4,
    title: "Calculator",
    desc: "A fully working calculator that supports keyboard input, built with vanilla JavaScript DOM manipulation.",
    emoji: "🔢",
    bg: "#FFFBEB",
    tags: ["js"],
    github: "#",
    live: "#"
  },
  {
    id: 5,
    title: "Weather App",
    desc: "Fetches real-time weather from an API. Search any city and see temperature, wind, humidity and more.",
    emoji: "🌤️",
    bg: "#EFF6FF",
    tags: ["js"],
    github: "#",
    live: "#"
  },
  {
    id: 6,
    title: "React To-Do App",
    desc: "A to-do list built in React using useState and useEffect hooks. Data saved to localStorage.",
    emoji: "✅",
    bg: "#FAF5FF",
    tags: ["react", "js"],
    github: "#",
    live: "#"
  },
  {
    id: 7,
    title: "Responsive Portfolio",
    desc: "My first fully responsive portfolio. Built with CSS Grid, Flexbox and media queries. Mobile-first.",
    emoji: "🎨",
    bg: "#FFF0F3",
    tags: ["html", "css"],
    github: "#",
    live: "#"
  },
  {
    id: 8,
    title: "Movie Search App",
    desc: "Search for any movie using the OMDB API. Shows poster, rating, genre and plot summary.",
    emoji: "🎬",
    bg: "#F0FFF8",
    tags: ["js"],
    github: "#",
    live: "#"
  },
  {
    id: 9,
    title: "React Portfolio",
    desc: "This portfolio, rebuilt in React! Uses useState for navigation, React Router, and component structure.",
    emoji: "⚛️",
    bg: "#EEF2FF",
    tags: ["react", "js"],
    github: "#",
    live: "#"
  }
];

// ─── BLOG DATA ───────────────────────────────────────────────────
const BLOGS = [
  {
    id: 1,
    title: "What I learned from building my first HTML page",
    preview: "When I typed my first HTML tag and something appeared on the screen, it felt like actual magic. Here's what I discovered about how the web really works...",
    date: "June 2025",
    readTime: "3 min read",
    category: "HTML",
    catColor: "#FF6584",
    catBg: "#FFF0F3"
  },
  {
    id: 2,
    title: "Why Flexbox completely changed how I think about layout",
    preview: "Before flexbox I used to struggle so much with centering things. Then I typed display:flex and it was like a superpower appeared. Let me explain why...",
    date: "July 2025",
    readTime: "4 min read",
    category: "CSS",
    catColor: "#6C63FF",
    catBg: "#EEF2FF"
  },
  {
    id: 3,
    title: "My first JavaScript project — building a quiz app",
    preview: "The moment JavaScript clicked for me was when I used addEventListener for the first time. Suddenly the page was responding to me. Here's how I built my quiz app...",
    date: "August 2025",
    readTime: "5 min read",
    category: "JavaScript",
    catColor: "#D4A017",
    catBg: "#FFFBEB"
  },
  {
    id: 4,
    title: "Fetching real data: my weather app journey",
    preview: "Using fetch() to get real live data from an API for the first time was both exciting and confusing. Promises, async/await, JSON — let me break it all down...",
    date: "September 2025",
    readTime: "6 min read",
    category: "JavaScript",
    catColor: "#D4A017",
    catBg: "#FFFBEB"
  },
  {
    id: 5,
    title: "Learning React: components make so much sense now",
    preview: "At first React seemed overly complicated. Why not just use HTML? But once I understood components and props, I couldn't imagine going back...",
    date: "October 2025",
    readTime: "5 min read",
    category: "React",
    catColor: "#43D39E",
    catBg: "#F0FFF8"
  },
  {
    id: 6,
    title: "Git saved my project — here's why every developer needs it",
    preview: "I accidentally deleted half my CSS file and panicked. Then I remembered git checkout and got everything back in 5 seconds. That day I became a Git believer...",
    date: "November 2025",
    readTime: "4 min read",
    category: "Git",
    catColor: "#E84393",
    catBg: "#FFF0F6"
  }
];
