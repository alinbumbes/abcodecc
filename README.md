# [AB Code](http://abcode.cc) portofolio
- [website](http://abcode.cc)
- [codepen](https://codepen.io/abcodecc)
- [X (twitter)](https://x.com/AbCodeCC)
- [Gmail](abcodecc@gmail.com)


Building a proof of concept website with lit framework, redux and tailwind while learning in the process. 

## Getting started

To run the project so far, clone  the repo using:

```git clone https://github.com/alinbumbes/abcodecc.git```

Now run a few commands:

```npm i```  to install everything ( lit, rollup, web-dev-server etc)

```npm start``` to start web-dev-server and watch for changes. The project will be running on http://localhost:8000/src/

```npm run build``` to build the project with rollup. Check ```/dist``` folder

to run the dist in a separate server, use the vscode extension LiveServer, right click on the index.html from /dist and click on "Open with Live Server". this should start the distribution version of the website in http://localhost:5500/dist/index.html


## TODO
1. [x] setup environment, figure out how to run a lit project without typescript and without a build system. Tried Vite, but it's not working out for me, then I tried Rollup and it's working fine for now.

2. [ ] build a To-do app like [todomvc](https://todomvc.com/) with lit components or like [this guy](https://lit-todo.netlify.app/)

3. [ ] save data to mongoDB account, retrieve data from mongoDb using axios
3. [ ] implement tailwind and rewrite everything to use it. 

4. [ ] Create a simple portfolio website: Glassmorphism style. [link](https://fa-glassmorphism-portfolio.netlify.app/) 
\- Add a menu bar that is not visible, only logo (left) and a hamburger menu (right)
\- Add a hero section with a title, description and a button on the left side, and a picture of a dude (me) on the right side. Animate as they come in to view, just a simple fade in, but first left side, then image. [link](https://dribbble.com/shots/16514975-Personal-portfolio-website)
\- There are 3-4 css round divs like balls that move randomly in the background. the background is also comprised of 2-3 large balls that have different colors and background has backdrop-filter so it's all like blurred glass. Maybe. dunno. 
\- add 3 glassmorphism cards with an icon, title, description and a button. [link](https://codepen.io/abcodecc)


- - - 

## Technologies used
**primary**
- [lit](https://lit.dev/)
- [rollup](https://rollupjs.org/guide/en/)
- [web-dev-server](https://modern-web.dev/docs/dev-server/overview/)
- [axios](https://github.com/axios/axios)

**other**
- [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
- [tailwindcss](https://tailwindcss.com/)
- [postcss](https://postcss.org/)
- [redux](https://redux.js.org/)

<!-- - [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [redux-persist-cookie-storage](https://github.com/rt2zz/redux-persist-cookie-storage)
- [redux-persist-filesystem-storage](https://github.com/rt2zz/redux-persist-filesystem-storage)
- [redux-persist-webextension-storage](https://github.com/rt2zz/redux-persist-webextension-storage)
- [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [redux-persist-transform-filter](https://github.com/rt2zz/redux-persist-transform-filter)
- [redux-persist-transform-compress](https://github.com/rt2zz/redux-persist-transform-compress) -->

