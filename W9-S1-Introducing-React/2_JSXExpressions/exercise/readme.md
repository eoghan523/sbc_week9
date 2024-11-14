# Exercise: React JSX Expressions

## Challenge

Now that you've set up your first React application using Vite, you'll notice there’s some starter code in `src/App.jsx` that's added by the Vite build tool.
In this exercise, we’ll focus on JSX expressions and dynamic rendering. While learning about state is up in our next session, today’s task is to render a list of student names dynamically.

When the app first loads, it should display only the first student's name.

## Key Learnings

- How to map through arrays in React
- Dynamically rendering elements with JSX
- Writing simple JSX expressions

## User Story

As a user, I want to see student names appear one by one each time I click a button, so I can view the names dynamically rendered on the page.

## Acceptance Criteria

1. **Array of Student Names**:

   - [ ] Create an array of at least 5 student names in `src/App.jsx`.

2. **Initial Rendering**:

   - [ ] When the app first loads, only the first student's name should be displayed.

3. **Dynamic Rendering with JSX**:

   - [ ] Use JSX to dynamically render the list of names based on the current count.
   - [ ] Use the `map` function in React to display each name as an individual `<li>` element within a `<ul>`.

4. **Code Structure and Comments**:
   - [ ] Ensure your code is clean and includes comments explaining key sections, especially the `map` function usage and how JSX expressions control the display.

## Instructions

1. **Setting Up the Array**:

   - In `src/App.jsx`, define a constant array `students` with at least 5 unique names.

2. **Creating State**:

   - Set up a state variable (e.g., `count`) that will track how many student names to display.

3. **Rendering Names Dynamically**:

   - Use the `map` function to render each name in a list format.

4. **Adding the Button**:

   - Implement a button that increments `count` by 1 each time it’s clicked.
   - Make sure to stop incrementing once all names in the array are displayed.

5. **Final Touches**:
   - Test the app to confirm that each click reveals one more name.
   - Add some basic styling to the list and button for clarity.

## Example Code Snippet

Here’s a sample structure to get you started:

```javascript
import { useState } from 'react';

function App() {
  const students = ["Alice", "Bob", "Charlie", "David", "Eve"];

  return (
    <div>
      <h1>Student Names</h1>
      <ul>
      <!--your code goes here->
      </ul>
    </div>
  );
}

export default App;
```

# Tips

- Remember that React re-renders the component every time the state changes, so updates to count will automatically re-render the list.

# Bonus

Instead of rendering simple variables as JSX expressions, can we use the return value of functions?

Happy coding and exploring JSX expressions!
