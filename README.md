## Install and Running
* `cd artists`
* `npm install`
* To start the development
  1. Run `npm start`
  2. Navigate to http://localhost:3000 in your browser of choice.
* To lint your code
  1. Run `npm run lint`
* To start production / build
  1. Run`npm run build`. Production files are all generated in [./dist](./dist).
  2. Wait until `webpack` finishes building all files, then run`npm run web-server` to start node service.
  3. Navigate to http://localhost:3000 or open `index.html` directly from [`./dist`](./dist) in your browser of choice.
* You can also remove `dist` folder by running `npm run clean`.

> **Note:** In `dev` mode, `redux-logger` and webpack hot modules are included for development purpose. In `build` or `prod` mode, these dev tools are removed and `dist` folder gets cleaned every time.


## Overview
#### Responsive design (Step 1)
* **`flex`** is used for responsive web designs.
* **`autoprefixer`** takes care of `css` prefixers across different browsers.

#### JS framework: React and Redux
* See [./src](./src) folder for the code and the structure.

#### Error handling (please try)
* Add error handlings for this project to improve user experience
  * Show **_"Loading"_** while there is an search HTTP request.
  * Show **_"no artists found"_** while there is no matched results based on the keywords.
  * Show **_"networking error"_** due to the server-side or network problems.

> **Note:**  If you search with **no keywords**, it simply renders the default page with default artists.

#### Express (Step 2)
* Build node (API) services.
  * Search API: http://localhost:3000/api/search
* All server-side code are in [./server](./server) folder.

#### Babel and Linting
* Use *eslint* to make sure the code is linted. Here [.eslintrc](./eslintrc) is the list of rules that are used in this project.

## Future work
Due to the limited time, I didn't add testings for the code. In the future, testing code can be added.
