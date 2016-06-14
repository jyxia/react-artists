## Install and Running
* `cd artists`
* `npm install`
* To start the development
  1. Run `npm start`
  2. navigate to http://localhost:3000 in your browser of choice.
* To lint your code
  1. Run `npm run lint`
* To start production / build
  1. Run`npm run build`. Production files are all generated in [./dist](./dist).
  2. After `webpack` finishes buidling all files, run`npm run web-server` to start node service.
  3. Navigate to http://localhost:3000 or open `index.html` directory from [`./dist`](./dist) in your browser of choice.

Note: In `dev` mode, `redux-logger` and webpack hot modules are included for development purpose. In `build` or `prod` mode, these dev tools are removed and `dist` folder is cleaned every time.


## Overview
#### Responsive design (Step 1)
* *`flex`* is used for responsive web designs.
* *`autoprefixer`* takes care of `css` prefixers across different browsers.

#### JS framework: React and Redux
* Rendering UI components.
* See [./src](./src) folder for the code and the structure.

#### Error handlings (please try)
* Add error handlings for this project to improve user experience
  * Show *"Loading"* while there is an search HTTP request.
  * Show *"no artists found"* while there is no matched results based on the keywords.
  * Show _"networking error"_ while the server is not running or the network is disconnected.
* If there is **no keywords**, simply renders the default page with default artists.

#### Express (Step 2)
* Build node (API) services.
* All server-side code is in [./server](./server) folder.

#### Babel and Linting
* Use *eslint* to make sure the code is linted. Here [.eslintrc](./eslintrc) is the list of rules that are used in this project.

## Future work
Due to the limited time, I didn't add testings for the code. In the future, testing code can be added.
