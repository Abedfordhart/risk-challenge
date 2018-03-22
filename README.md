## JS Take Home Test

#### Overview

- Create a **multi-entry text box** component that allows the user to type and select multiple entries from a list of data. This is a UI pattern often used for entering lists of data, such as message recipients (seen on Gmail/Facebook) or tagging.
- Follow these **UX designs/wireframes** for how the component should look and act: https://preview.uxpin.com/df425e14a6ff947e1fbe4b98c99bbabba74c420d (password: `takehome`)
  - Fixture data for the items in the list are available in `src/data.json`. The array can be loaded via ES6 import or manually copied.

#### Instructions

- Use whichever framework that **you're most comfortable with**, such as React/Angular/Ember/etc.
  - This project has been set up with Webpack/Babel, meaning that you have access to ES6 features for your code. This also includes CSS and JSON loaders, so you can directly import CSS/JSON automatically `import "src/index.css"` or `import data from "src/data.json"`.
  - If using React, the project includes some boilerplate code, including integrated hot module replacement — the website will dynamically patch itself with your code changes without need for a page reload.
  - If using another framework, add its dependencies to the project (either via `npm` or by manually including the library via files or CDN urls). Delete the React boilerplate code and replace with your own. Keep `src/index.js` though — it's your initialization script for the website!
- However, you are **not allowed** to use any other libraries/components other than jQuery and the official framework library of your choice. The component should be implemented from scratch.
- **Commit your code early and often** — we want to see your process as you iterate and implement the component.
- Include inline documentation in your code to **explain your choices**.

#### Setup 

- Install node/npm: https://nodejs.org/en/

- Clone the repo:`git clone git@bitbucket.org:riskiq/js-takehome-INTERVIEWEE.git`

- Navigate to the project directory `cd js-takehome-INTERVIEWEE`

- Install node dependencies: `npm install`

- Run the node webserver: `npm start`

- Open the website in a browser: http://localhost:8080/

- Implement the component!

  ​