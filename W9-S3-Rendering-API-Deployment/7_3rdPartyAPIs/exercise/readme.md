# Exercise: React and Third-Party APIs

## Challenge

In this exercise, you’ll work with a pre-existing React codebase that retrieves data from the **Cat Facts API** using the Fetch API. Your goal is to refactor this code to use the **Axios** library instead of Fetch. Axios is widely used for making HTTP requests in both front-end (React) and back-end (Node.js) applications, offering more functionality and simplicity in certain cases.

You’ll learn how to install and configure Axios in a React project and work with third-party APIs in a real-world scenario. Review online documentation and examples to help you make these changes effectively.

### Requirements:

- Refactor the provided code in the `/code` folder to use Axios in place of Fetch for API requests.
- Store the retrieved Cat Facts data in React state and display it in the UI.

## Key Learnings

- Working with third-party APIs in React.
- Installing and using the **Axios** library in a React project.

## User Story

**As a developer**,  
**I want** to learn how to use Axios for making HTTP requests in a React application,  
**so that** I can efficiently handle data from third-party APIs.

## Acceptance Criteria

- [ ] Axios should be installed as a project dependency and imported into the necessary files.
- [ ] All instances of the Fetch API for data retrieval should be refactored to use Axios.
- [ ] Cat Facts data should be correctly retrieved, stored in React state, and displayed on the UI as before.
- [ ] The application should run without errors, and the UI should display the list of Cat Facts in the same manner as the initial implementation.
- [ ] The refactored code should be well-organized and follow best practices for using Axios in React.

## Helpful Resources

- **Cat Facts API Documentation**: [Cat Facts API](https://catfact.ninja/)
- **Axios Documentation**: [Axios GitHub](https://github.com/axios/axios)
- **Using Axios with React**: [DigitalOcean - Using Axios with React](https://www.digitalocean.com/community/tutorials/react-axios-react)
- **Axios vs Fetch**: [LogRocket - Axios vs Fetch: Which Should You Use?](https://blog.logrocket.com/axios-vs-fetch-best-http-requests/)
