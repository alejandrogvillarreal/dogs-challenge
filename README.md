# Foreword

First, thanks for making the time for this challenge! We really appreciate it.

## Challenge - Dog Team

### What should you build?

Design a small React app that shows a list of breeds using the api "Dog API" (https://dog.ceo/dog-api/). Add the ability to search the list by breed name. When a breed on the list is clicked, the app should navigate to the breed page.

The breed page: this page should show a list of dog pictures of the breed. This list should have a traditional pager or a scrolling pager, you decide. Add a button "Add to my team" to each dog.

When "add to my team" button is clicked, the dog should be added to the user's team. The user's team can have a maximum of 10 dogs and cannot have more than 3 dogs of the same breed.

My team section: this section should display the user's team. The dogs should be grouped by breed in the UI. Add a button to remove a dog from the user's team.

For saving the data of "My team section" use something local, may be cookies, local storage or something else. But don't use anything on the server side.

### Notes

- Add a README with everything you consider necessary to run the app
- Do not develop any backend code
- If you make any assumptions, take note of them in the README, so we can better understand your decisions.
- We are open for questions if you have any doubts

# Dogs Challenge

## Installation

- Clone this repo and sub-modules with `git clone https://gitlab.com/greencodesoftware/interview-challenges/dogs-challenge-alejandro.git`
- Run the command **npm install**.
- Run the command **npm start**.
- To access it go to http://localhost:3000

### Get information.

This APP uses the [Dog API](https://dog.ceo/dog-api/).

## Setup

### Folder Organization

```bash.
├── src
│   ├── /assets
│   ├── /components
│   ├── /config
│   ├── /redux
│   │   ├── /actions
│   │   ├── /reducers
│   │   ├── constants.ts
│   │   └── store.ts
│   ├── /types
│   ├── /utils
│   ├── /view
│   └── index.tsx
├── package.json
└── Dockerfile
```

- **src**: Folder where the source code of the front-end of the app will be.
- **assets**: Static files.
- **components**: REACT components.
- **config**: Configuration files.
- **redux**: Everything related to redux.
- **types**: Typescript interfaces.
- **utils**: Functions common to all.
- **view**: Folder with the view of the application.
- **index**: Application entry.

## Scope

### Features

With the App we can:

- Search breeds and see all their photos.
- Add and remove dogs to our team (max 10 in total and 3 of the same breed).

### Assumptions

A breed is considered to be:

- Dogs that do not have sub-breeds.
- If the dog has sub-breeds, each of its sub-breeds is considered a breed.

```
{
  "havanese": [],
  "hound": [
  "afghan",
  "basset",
  "blood",
  ],
}
```

The breeds would be :

- havanese
- hound-afghan
- hound-basset
- hound-blood

## Technologies used

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/docs/getting-started.html)
- [React-router](https://github.com/ReactTraining/react-router)
- [Redux](https://redux.js.org/basics)
- [React-Redux](https://github.com/reactjs/react-redux)
- [Redux-Thunk](https://www.npmjs.com/package/redux-thunk)
- [localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [Bootstrap](https://getbootstrap.com/)

### Front-End Routes

- `/`: The home route has a list of all breeds with their image.
- `/breed/:breed_name`: Show photos of a particular breed.
- `/team`: Shows the dogs added to the team.

## Ports

The frontend is raised on port 3000, therefore, to access it we enter http: // localhost: 3000.