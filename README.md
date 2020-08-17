# [<img align="center" alt="Instagram Logo" width="26px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.4.1/icons/instagram.svg" />][instagram] Insta Posts Scraper

## Overview

This project is part of a Web scraping study. It can be used as a section part in a bigger website but it is not recommended due to API response time, will dramatically reduce. Instagram provides a graphql api for this.

### Front-End

I used pure HTML, CSS and JavaScript.

### Back-End

I made a dedicated API that wait for the front-end request, execute all the web scraping process and return a object as a response. For this API I used [ExpressJs](https://expressjs.com/) to run a simple server, [CORS](https://github.com/expressjs/cors) for cross-origin requests, [Puppeteer](https://pptr.dev/) which provides a high-level API to control Chrome or Chromium and [NodeJs](https://nodejs.org/en/).

## Basic usage

First start cloning this repo

```
git clone https://github.com/stgonzales/insta-post-scraper.git
```

Install all the packages

```
yarn install
```

First you need to run the server, in the command line go to the **insta-post-scrapper** folder and execute

```
yarn start
```

Then use the [Visual Studio Code](https://code.visualstudio.com/) extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to execute the `index.html` file inside the `/src/` folder. Presuming that you already have Live Server, just right click in the `/src/index.html` and select option 'Open With Live Server'.

...And :tada:, you can type any instagram user name to see the results.

## Tools used

[<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />][js]
[<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />][html]
[<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />][css]
[<img align="left" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />][node]
[<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />][vs]

[instagram]: http://instagram.com
[html]: https://www.w3schools.com/html/
[css]: https://www.w3schools.com/css/
[js]: https://www.w3schools.com/js/
[node]: https://www.w3schools.com/nodejs/
[vs]: https://code.visualstudio.com/