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

## Overview
#### Responsive design (Step 1)
* *`flex`* is used for responsive web designs.
* *`autoprefixer`* takes care of `css` prefixers across different browsers.

#### JS framework: React and Redux
* Rendering UI components.
* See [./src](./src) folder for the code and the structure.

#### Error handlings
* Add error handlings for this project to improve user experience
  * When the search request sent, show a loading indication
  * When there is no matched results based on the keywords, show a 'no found' indication
  * _*Even*_ when the server is not running or the network is disconnected, show a 'networking error' indication.

#### Express (Step 2)
* Build node (API) services.
* All server-side code is in [./server](./server) folder.

#### Babel and Linting
* Use *eslint* to make sure the code is linted. Here [.eslintrc](./eslintrc) is the list of rules that are used in this project.

## Discussions

## Future work
Due to the limited time, I didn't add testings for the code. In the future, testing code can be added.
