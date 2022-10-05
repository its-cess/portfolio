let projects = [
  {
    id: 11,
    title: "MERN app",
    description:
      "This project allows users to create an account, log in, and add their favorite places. Authentication and authorization are in place along with form validation for signing up, logging in, and creating a new place. Certain routes and actions are disabled based on the logged in user. Only the user that created the place is allowed to edit or delete it. A pop up modal allows users to view the locations on a map. Image upload is used for both profile pictures and place images. This app uses all of the CRUD operations.",
    image: "/mern-project.png",
    url: "https://vue-http-demo-df59d.web.app/",

    using:
      "This project was created using React v16, React Router v5, CSS, CSS Transition library, and Google's Geocoding API. The backend was created using Node and Express.js. The database was created using mongoose and MongoDB. Express-validator was used as a middleware for data validation. Multer package was used to handle multipart form data. UUID was used to create unique IDs. BCryptJS was used for storage of hashed passwords. JSONWebToken was used for authentication/authorization. Axios was used to make API calls. Hosted using Firebase and Heroku."
  },
  {
    id: 10,
    title: "Blog",
    description:
      "This project allows users to login and create blog posts. All CRUD operations are available as users are able to also edit and delete their blog posts when logged in.",
    image: "/blog.png",
    url: "https://www.loom.com/share/a21002c7293e44588904a7b4149f81c9",
    repo: "https://github.com/its-cess/blog",
    using:
      "This blog was created using Vue v2, Vue Router v3, Vuex v3, and Bootstrap Vue. Axios was used to make calls to a headless CMS for the backend."
  },
  {
    id: 9,
    title: "Monster Rolodex",
    description: `This project fetches monster data and displays them in a monsters "rolodex". Users are able to search and filter out monsters by typing in the search field.`,
    image: "/monsters-rolodex.png",
    url: "https://its-cess.github.io/react-classes-monsters/",
    repo: "https://github.com/its-cess/react-classes-monsters",
    using:
      "This project was created using React v18 using a mixture of class and functional components. An API was used to fetch the monster data."
  },
  {
    id: 8,
    title: "Resource Library",
    description: `This application allows you to create and store resources. Validation is used when adding a resource and a modal will popup if not all fields are added. Clicking on "View Resource" will take you to the page of the link provided. Users are also able to delete resources.`,
    image: "/resource-library.png",
    url: "https://its-cess.github.io/resource-library/",
    repo: "https://github.com/its-cess/resource-library",
    using: "This project was created using Vue3 and CSS."
  },
  {
    id: 7,
    title: "Monster Slayer Game",
    description:
      "Users get to play against the computer to try to slay the monster. Users can choose to attack, heal themselves, use a special attack, or surrender. The monster's and player's health are displayed on screen. Special attacks are only available every third turn. Surrender automatically ends the game and the player loses. When a player's health runs out, the monster wins. When the monster's health runs out, the player wins. A battle log is output on the screen displaying each move that is made by the player and monster. The battle log also displays how much damage or healing occurred.",
    image: "/monster-slayer.png",
    url: "https://its-cess.github.io/monster-slayer/",
    repo: "https://github.com/its-cess/monster-slayer",
    using: "This game was created using Vue.js and CSS."
  },
  {
    id: 6,
    title: "Recipes",
    description:
      "This site is used for storing recipes. You can view the recipe and return to the top of the page when finished. There is a home button to take you back to the listing of all the recipes. For multi-part recipes, a carousel is used to separate the ingredients by section.",
    image: "/recipes.png",
    url: "https://its-cess.github.io/odin-recipes/recipes/",
    repo: "https://github.com/its-cess/odin-recipes",
    using: "This site was created using HTML, CSS, and Bootstrap."
  },
  {
    id: 5,
    title: "To-Do List",
    description:
      "This is an interactive to-do list. You can add items, check them off the list when complete, and clear the list when everything is done. If everything is not finished, the items will be stored and can be finished at another time. Items will only be removed when the list is cleared.",
    image: "/to-do-list.png",
    url: "https://its-cess.github.io/to-do-list/",
    repo: "https://github.com/its-cess/to-do-list",
    using:
      "This to-do list was created with React v17 and CSS. It is built using functional components and uses localStorage to store the items on the list."
  },
  {
    id: 4,
    title: "Tindog",
    description:
      "This is webpage for a fake startup called TinDog (Tinder for dogs!). Links in the nav bar will take you to the corresponding section. A carousel is used to display the fake reviews of this app.",
    image: "/tindog.png",
    url: "https://its-cess.github.io/tindog/",
    repo: "https://github.com/its-cess/tindog",
    using: "This page was created using HTML, CSS, and Bootstrap."
  },
  {
    id: 3,
    title: "Simon Says",
    description:
      "The game starts when a player pushes any key. The computer picks a color and a user has to click the matching color. Every round the pattern gets longer and the user has to repeat the pattern in the correct order or they lose. Different sounds are played with each color pressed. The level is shown at the top and increases each round the player gets correct. When a player gets the pattern incorrect, the screen flashes red and returns them back to Level 1.",
    image: "/simon-game.png",
    url: "https://its-cess.github.io/simon-game/",
    repo: "https://github.com/its-cess/simon-game",
    using: "This game was created using HTML, CSS, JavaScript, and jQuery."
  },
  {
    id: 2,
    title: "Drum Set",
    description:
      "This game allows users to play the drums online! A different sound is played with each corresponding piece of the drumset. The user can either click on the images to play the sound, or press the corresponding key.",
    image: "/drum-kit.png",
    url: "https://its-cess.github.io/drum-kit/",
    repo: "https://github.com/its-cess/drum-kit",
    using: "This game was created with HTML, CSS, and vanilla JavaScript."
  },
  {
    id: 1,
    title: "Dicee Game",
    description: `This game shows two dice, one for Player 1 and another for Player 2. On refresh, the dice are "rolled" and whichever player has the higher number wins. The winner is displayed at the top of the screen. If the players roll the same number, a tie occurs.`,
    image: "/dicee.png",
    url: "https://its-cess.github.io/dice-game/",
    repo: "https://github.com/its-cess/dice-game",
    using: "This game was created with HTML, CSS and vanilla JavaScript."
  }
];

export default projects;
