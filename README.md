[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy)
--------------------------------------------------------------------------------

## Install and Running
* Go to `react-artists` folder if you are not in.
  1. `cd react-artists`
* `npm install`
* To start the development
  1. Run `npm start` or `npm run start`
  2. Your terminal should pop up a message like this:
    ```message
      Open up http://localhost:6001/ in your browser.
    ```
    
    the port number depends on the assignment from `cfenv`.
* To lint your code
  1. Run `npm run lint`
* To start production / build
  1. Run`npm run build`. Production files are all generated into [dist](./dist).
  2. Wait until `webpack` finishes building all files, then run `npm run web-server` to start node service.
  3. Navigate to http://localhost:6001 or open `index.html` directly from [`dist`](./dist) in your browser of choice.
* To clean `dist`
  1. run `npm run clean`.

> **Note:** In `dev` mode, `redux-logger` and webpack hot modules are included for development purpose. In `build` or `prod` mode, these dev tools are removed and `dist` folder gets cleaned every time.

## Deploy to Blumix
* Simply click this magi button

  [![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy)

* Or clone this repo, open [manifest.xml](./manifest.xml), change `host` and `name` to _"yourAppName"_. Then use `cf cli` to push to Bluemix. (`cf push`)

## Overview
#### Responsive design
* **`flex`** is used for responsive web designs.
* **`autoprefixer`** takes care of `css` prefixers across different browsers.

#### JS framework: React and Redux
* See [src](./src) folder for the code and the structure.

#### Error handling
* Add error handlings for this project to improve user experience
  * Show **_"Loading"_** while there is an search HTTP request.
  * Show **_"no artists found"_** while there is no matched results based on the keywords.
  * Show **_"networking error"_** due to the server-side or network problems.

> **Note:**  If you search with **no keywords**, it simply renders the default page with default artists.

#### Express
* Builds node (API) services.
  * Search API: `/api/search`
* Provide web services, host static files (e.g. `index.html`).
* All server-side code is in [server](./server) folder.

#### Babel and Linting
* Use *eslint* to make sure the code is linted. Here [.eslintrc](./eslintrc) is the list of rules that are used in this project.

#### Others
* Version control: `git`. `develop` -> `master`
* Tested browsers: Chrome v50, Firefox v47+, Safari v9+.
