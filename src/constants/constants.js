//calulate elapsed years since i started coding;
let currentYear = new Date().getFullYear();
let ellapsed_years = currentYear - 2019;

export const projects = [
  {
    title: 'Music Player',
    description: "Audio player in PyQt5 and pyGame for sound...",
      image: 'https://ik.imagekit.io/magpiny21/myPortfolio/version0.1_nTWZnvIAz.png',
      tags: ['Python','PyQt5','GUI Programming','PyGame'],
    source: 'https://github.com/Magpiny/Python-Gui-Programming',
    visit: '',
    id: 0,
  },
  {
    title: 'Chat App',
    description:"This is an invite only Chat app built with Reactjs and powered by chat engine...",
    image: 'https://ik.imagekit.io/magpiny21/myPortfolio/tod_sKZa8rtu05R.png',
    tags: ['JavaScript','React', 'ChatEngine'],
    source: 'https://github.com/Magpiny/chat-app',
    visit: 'https://chat-app-magpiny.vercel.app/',
    id: 1,
  },
  {
    title: 'Twirra',
    description: "Twitter clone made with reactjs on UI, material-ui for styling and firebase on the backend",
    image: "https://ik.imagekit.io/magpiny21/myPortfolio/twirra1_GdWMy1j8ZUe.png",
    tags: ['JavaScript','React', 'firebase'],
    source: 'https://github.com/Magpiny/twirra',
    visit: 'https://twirra1.web.app/',
    id: 2,
  },
  {
    title: 'Weather App',
    description: " Practised making API requests in reactjs...",
    image: 'https://ik.imagekit.io/magpiny21/myPortfolio/weatherApp_JRZs1qDBnWn.png?tr=w-1200,h-630,fo-auto',
    tags: ['React', 'openweather API', 'JavaScript'],
    source: 'https://github.com/Magpiny/react-weatherApp',
    visit: 'https://mvua-appu.netlify.app',
    id: 3,
  },
  {
    title: 'Todo App',
    description: "Practised browser storage using indexedDB storage",
    image: 'https://ik.imagekit.io/magpiny21/myPortfolio/todoPro_mofOu5FuP.png',
    tags: ['Javascript', 'Browser Storage', 'IndexDB'],
    source: 'https://github.com/Magpiny/ToDoList',
    visit: 'https://to-do-list-blush.vercel.app/',
    id: 4,
  },
  {
    title: 'Calculator',
    description: " Practised Neumorphic design by making this beautiful calculator",
    image: 'https://ik.imagekit.io/magpiny21/myPortfolio/jsCalculator_q4CLHd2_L.png',
    tags: ['Javascript', 'Neumorphic Design', 'Calculator'],
    source: 'https://github.com/Magpiny/jsCalculator',
    visit: 'https://jscalculator1.netlify.app',
    id: 5,
  },
   {
    title: 'Landing Page',
    description: " Sharpened my CSS skills by building this awesome landing page",
    image: 'https://ik.imagekit.io/magpiny21/myPortfolio/landingpage_VDiXk8xj_.png?updatedAt=1633523056941',
    tags: ['HTML', 'CSS', 'Landing Page'],
    source: 'https://github.com/Magpiny/flexBox-cssGridTutorial',
    visit: 'https://landingpage-0x1.netlify.app',
    id: 6,
  },
  {
    title: 'Django Todo App',
    description: "Started learning django web framework...",
    image: 'https://ik.imagekit.io/magpiny21/myPortfolio/djangoTodo_jzUZNrLWp.png?updatedAt=1636240450869&tr=w-1200,h-630,fo-auto',
    tags: ['HTML', 'CSS', 'Python', 'Django'],
    source: 'https://github.com/Magpiny/Django-TodoApp',
    visit: 'https://djangotodoapp1.herokuapp.com/',
    id: 6,
  },
  
  
];

export const TimeLineData = [
 
  { year: 2019, text: 'Did my final year college Project and started working on pet projects', },
  { year: 2020, text: 'Started teaching computer studies while still learning programming', },
  { year: 2021, text: 'Got a 3 months internship from Andela Kenya', },
];

export const data = [
  { number: 30, text: ' Projects'},
  { number: `${ellapsed_years}yrs`, text: 'Experience', },
  { number: 2, text: 'Github Followers', },
  { number: 33, text: 'Github Stars', }
];
