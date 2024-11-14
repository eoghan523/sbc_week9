# Exercise: Passing Functions as Props

## Challenge

In this exercise, we’ll build on the previous task by passing functions to components via props.
Typically, props are used to pass data, but in React, it’s also possible to pass methods, allowing for more interactive components.
Your challenge us to create a function in App.jsx called onClickStudent. This function takes an argument studentName and displays it after the list of students in App.jsx.
The function should be passed to the Student component with a button being added to Student.jsx that when clicked invokes onClickStudentpassing the name of the active student.

## Key Learnings

- How to pass objects and functions as props in React
- Invoking parent functions from within a child component
- Deepening understanding of props and component interaction

## User Story

As a user, I want each student component to have a button that passes the name of the selected student to the parent component so when clicked, it displays on the parent component.

## Acceptance Criteria

1. **Passing the Function**:

   - [ ] Pass the `onClickStudent` function from `App.jsx` to each `Student` component as a prop.

2. **Student Component Button**:

   - [ ] Add a button in each `Student` component that, when clicked, calls the `onClickStudent` function passing the name of the student as an argument

3. **Functionality**:

   - [ ] Each button should set the name of the current selected student on the parent component

4. **Code Structure**:

   - [ ] Use descriptive prop names when passing functions, and include comments to clarify function handling in both `App.jsx` and `Student.jsx`.

5. **Test the Application**:

   - Start the application and verify that clicking the button within each `Student` component passes the `name`, rendering the name dynamically on the parent component.

# Tips

- Passing functions as props allows for communication between parent and child components, giving children control over the parent's state.
- This pattern is common in React for managing shared state and enhancing interactivity across components.
  Happy coding!
