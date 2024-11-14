# React Timers and Filters

## Challenge

In this challenge, you will extend your existing React application by implementing two new features marked in `App.jsx`:

1. **A Timer**: Use the `setTimeout` method to display an error message, and then clear it automatically after 5 seconds.
2. **A Search Bar**: Add a search input field to filter contacts by name. When the search is invoked, display only the contacts matching the search term.

These features will require using `useState` for managing the search and error message states and understanding how to interact with browser APIs and array filtering methods in React.

## Key Learnings

- Using `useState` for managing local component states
- Adding new input elements and syncing them with local state
- Using the `setTimeout` browser API to control the display duration of elements
- Implementing array filtering with the `filter` method in JavaScript
- Enhancing user experience by providing real-time search results

## User Story

As a user, I want to search for contacts by name using a search bar and receive error messages that disappear automatically after a short time, so that I can easily manage my contact list.

## Acceptance Criteria

- [ ] Implement a timer that hides error messages after 5 seconds.
  - [ ] When an error message is displayed, set a timer using `setTimeout` to clear the message after 5 seconds.
  - [ ] Use `useState` to manage the visibility of the error message.
  - [ ] Ensure the message reappears if another error occurs within the timeout period.
- [ ] Add a search bar with an input field and a button for searching contacts by name.
  - [ ] Create a new `useState` variable to manage the search term.
  - [ ] Filter the list of contacts based on the search term using the `filter` method.
  - [ ] Display only the filtered contacts when a search is active, and restore the full list when the search term is cleared.
- [ ] Ensure that both features integrate smoothly into the existing UI and functionality of the app.

## Getting Started

1. Open `App.jsx` and locate the `TODO` comments for the timer and search bar features.
2. Implement the timer by using `setTimeout` and managing the error message state.
3. For the search functionality, add a new input field and button, and use `filter` to manage the list of displayed contacts.
4. Run and test your app to make sure the error message disappears after 5 seconds and the search functionality works as expected.

## Tips

- Test the timer by triggering an error condition and checking that the message clears automatically.
- For the search bar, ensure that the filter is case-insensitive for a better user experience.
- Consider using `clearTimeout` to manage any potential issues with overlapping timers if multiple errors occur in quick succession.

## Advanced Challenge

Try extending the search to include partial matches (e.g., typing "Ann" should match "Anna" and "Annabelle") for a more user-friendly experience.
