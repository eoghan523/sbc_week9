# Using State to Enhance a React App

## Challenge

In this challenge, you will work with the provided React application, which builds upon exercises 4 and 5, with additional functionality added. Your task is to enhance the `Add Contact` feature by implementing form validation. Review the code in `App.jsx` for guidance and prompts, and use `useState` and `useEffect` to manage and respond to the form’s state. The goal is to make the form interactive and responsive, preventing invalid entries and providing feedback to the user.

## Key Learnings

- Mastering `useState` and `useEffect` hooks within a React application
- Understanding how to enhance existing applications by adding new functionality
- Implementing form validation logic in React
- Managing form state and displaying dynamic validation feedback

## User Story

As a user, I want to add new contacts using a form that provides real-time feedback, so I can easily correct any mistakes before submitting.

## Acceptance Criteria

- [ ] The form for adding a new contact should include fields for a contact's name, email, and phone number.
- [ ] `useState` should be used to manage the state of each input field.
- [ ] The form should prevent submission if any field is empty or if an invalid email format is entered.
- [ ] Validation messages should appear in real-time as the user fills in each field.
  - [ ] If a field is empty, display a message indicating it is required.
  - [ ] If an email is entered in an invalid format, display an error message next to the email field.
- [ ] Upon successful submission of a valid contact, reset the form fields to their initial state.
- [ ] Use `useEffect` to handle side effects, such as focusing on the first invalid field if the form is submitted with errors.
- [ ] The application should be updated to reflect the new contact in the contacts list upon successful submission.

## Getting Started

1. Review the existing code, especially `App.jsx`, to understand the current structure and functionality.
2. Implement `useState` for managing form input states.
3. Use `useEffect` where appropriate, particularly for validation side effects.
4. Run the app locally to test the form validation and ensure the new contact is added correctly upon valid submission.

## Tips

- Think about which components need access to each piece of state, and whether any state can be localized to the form itself.
- Try to provide clear, user-friendly validation messages and ensure the form is as intuitive as possible.
- Consider additional validation such as character limits or phone number formatting if time permits.

# Getting Started

```bash
npm i
npm run dev
```
