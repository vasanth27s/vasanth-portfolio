import React from "react";

// Import the local image
import pic10 from "C:/Projects/vasanth-portfolio/src/components/Project Images/pic10.png";


const Items = [
  {
    id: 1,
    mainImage: pic10, 
    img: [
      pic10,
      pic10,
      pic10,
      pic10,
      pic10,
      pic10,
      pic10,
    ],
    features: [
      "Home",
      "About",
      "Register",
      "Login",
      "Posts",
      "Likes",
      "Comments",
      "Built pages for Login, Home, Register, and Profile, Posts, Post with React components, form inputs, and event handlers.Persisted login state with local storage and protected routes with React Router.",
      "404 Page and many more.",
    ],
    technologies: [
      "React",
      "TailwindCSS",
      "React Leaflet",
      "React Hooks",
      "Node JS",
      "Local Storage,",
      "Routing, REST API Calls,",
      "JWT Token",
      "CSS",
      "Mongo DB"
    ],
    title: "VK Media",
    description:
      "it features real-time updates, user authentication, and dynamic content rendering,Check it out and let me know your thought",
    category: "business",
    liveLink: "https://vk-media.vercel.app/",
    codeLink: "https://github.com/vasanth27s/vk-media",
  },
  {
    id: 2,
    mainImage: pic10, 
    img: [
      pic10, 
    ],
    features: [
      "Home",
      "About",
      "Register",
      "Login",
      "Chat",
      "full-stack chat application that enables real-time communication between users. It features user authentication,realtime messaging, and an intuitive user interface. The project leverages a variety of modern web developmenttechnologies to deliver a seamless user experience.",

    ],
    technologies: [
      "React",
      "TailwindCSS",
      "React Leaflet",
      "React Hooks",
      "Node JS",
      "Local Storage,",
      "Routing, REST API Calls,",
      "JWT Token",
      "CSS",
      "Mongo DB"
    ],
    title: "VK Chat",
    description:
      "it features real-time updates, user authentication, and dynamic content rendering,Check it out and let me know your thought",
    category: "business",
    liveLink: "https://vk-chat-beta.vercel.app/login",
    codeLink: "https://github.com/vasanth27s/vk-chat",
  },
];

export default Items;
