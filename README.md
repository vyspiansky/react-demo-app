# [DEPRECATED] Math.org.ua Draft v0.0.1

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

URL: [math.org.ua](https://math.org.ua/)

## Commands

```npm start```
Runs the app in the development mode.

```npm run build```
Builds the app for production to the build folder.

## Features

* Changing the page title from React components via React Helmet
* Bookmarkable URLs via React Router
* Webfonts (ex., Roboto, Ionicons)

## TODO

* Use Redux for "shared state" that every component can access
* Slide Menu with animation using CSS 3
* Add Google Analytics code
* Spinner for AJAX requests
* Split the code into small chunks to load them on demand)
* Add a CSS Preprocessor (Sass, Less etc.)
* Add Bootstrap
* Pre-Rendering into Static HTML Files
* Writing Tests with Jest

## Troubleshooting

If you see "Error: EPERM: operation not permitted..." on your Windows machine after using the command
```
npm install --save react-helmet
```
or
```
npm install --save react-redux
```

Try 

* run this command again as root/Administrator or
* add "--no-optional", for example,
```
npm install --save react-helmet --no-optional
```
```
npm install --save react-redux --no-optional
```
