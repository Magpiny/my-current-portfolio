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
    title: 'Magpiny Blog',
    description: "My personal blogging platform",
    image: "https://ik.imagekit.io/magpiny21/myPortfolio/blog_l5IqrcJw2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672682345564&tr=w-1200%2Ch-675%2Cfo-auto",
    tags: ['JavaScript','React','Tailwind CSS', 'Nextjs', 'Hygraph'],
    source: 'https://github.com/Magpiny/magpinyblog',
    visit: 'https://magpinyblog.vercel.app/',
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
    visit: 'https://to-do-list-blush.vercel.app',
    id: 4,
  },
  {
    title: 'Magpint Real Estate',
    description: " Practised working with APIs in Nextjs and building UserInterface using Chakra UI",
    image: 'https://ik.imagekit.io/magpiny21/Any_Project_Photos/realestate_-QH9CaLmF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648489113026&tr=w-1080%2Ch-1080%2Cfo-auto',
    tags: ['Javascript', 'APIs', 'ChakraUI','Nextjs'],
    source: 'https://github.com/Magpiny/Magpiny-RealEstate',
    visit: 'https://magpiny-real-estate.vercel.app',
    id: 5,
  },
   {
    title: 'Students Corner',
    description: "A chart system where students with common interest can create a room(like fb group) and discuss a common topic/subject",
    image: 'https://ik.imagekit.io/magpiny21/myPortfolio/studentscorner_eTF3dt8mB.png?updatedAt=1639858053186&tr=w-1200,h-675,fo-auto',
    tags: ['HTML', 'CSS', 'Python', 'Django', 'Chart System'],
    source: 'https://github.com/Magpiny/studentcenter',
    visit: 'https://studentscorner.herokuapp.com',
    id: 6,
  },
  {
    title: 'Django Todo App',
    description: "Started learning django web framework...",
    image: 'https://ik.imagekit.io/magpiny21/myPortfolio/djangoTodo_jzUZNrLWp.png?updatedAt=1636240450869&tr=w-1200,h-630,fo-auto',
    tags: ['HTML', 'CSS', 'Python', 'Django'],
    source: 'https://github.com/Magpiny/Django-TodoApp',
    visit: 'https://djangotodoapp1.herokuapp.com',
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

