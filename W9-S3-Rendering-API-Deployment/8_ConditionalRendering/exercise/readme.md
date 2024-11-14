# Exercise: Conditional Rendering

## Challenge

In this exercise, you’ll work with a modified `App.jsx` file located in the `exercise/src` folder. Start by replacing the `App.jsx` file in your `code/src` folder with this new version. This application retrieves a list of Cat Facts; however, the current User Experience (UX) does not handle errors or cases when no Cat Facts are available.

Your challenge is to follow the TODO prompts in the code to:

1. Display an error message if an error occurs while fetching the data.
2. Add conditional rendering that shows either a list of Cat Facts or the message "No facts to display" if the list is empty.

This exercise will help you understand how to improve user experience by conditionally rendering different elements based on the app’s state.

## Key Learnings

- Using conditional rendering in React to manage different application states.
- Improving User Experience by handling edge cases, such as errors and empty data.

## User Story

**As a user**,  
**I want** to see relevant information even if errors occur or no data is available,  
**so that** I have a smoother and clearer experience while using the application.

## Acceptance Criteria

- [ ] An error message is displayed if there’s an issue retrieving Cat Facts data.
- [ ] If there are no Cat Facts available, the message "No facts to display" is shown in place of the list.
- [ ] If Cat Facts are successfully retrieved, they should display in a list as before.
- [ ] The code uses conditional rendering to handle these different application states effectively.
- [ ] The application runs without errors and meets all specified conditions for user experience.

## Helpful Resources

- **React Conditional Rendering**: [React Docs - Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
- **Using Ternary Operators in JSX**: [FreeCodeCamp - How to Use Conditional Rendering in React](https://www.freecodecamp.org/news/react-conditional-rendering/)
