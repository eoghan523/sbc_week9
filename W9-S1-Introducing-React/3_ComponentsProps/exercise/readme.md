# Exercise: Using Components and Passing Props

## Challenge

Building on your last exercise, we’ll refactor the application to use components and props. This time, you’ll create a new `Student` component to display each student’s name and age.
Start by updating your array of student names to an array of objects with `name` and `age` properties. The `Student` component will receive `name` and `age` as props, allowing it to render each student's details dynamically.

**Bonus Task**: If a student’s age is over 21, the component should also display "Mature Student" next to their name.

## Key Learnings

- How to create and use components in React
- Passing and destructuring props
- Conditionally rendering content based on prop values

## User Story

As a user, I want to see a list of students with their names and ages, so that I can identify students easily. If a student is over 21, they should be marked as a "Mature Student."

## Acceptance Criteria

1. **Array of Student Objects**:

   - [ ] In `src/App.jsx`, update the `students` array to hold objects with `name` and `age` properties.

2. **Student Component**:

   - [ ] Create a `Student.jsx` file in a new `src/components` folder.
   - [ ] Define the `Student` component to accept `name` and `age` as props and render both values.

3. **Passing Props**:

   - [ ] In `App.jsx`, update the `map` function to pass each student's `name` and `age` to the `Student` component.

4. **Bonus Conditional Rendering**:

   - [ ] In `Student.jsx`, if a student’s age is over 21, display the text “Mature Student” alongside the student’s name.

5. **Destructuring Props**:

   - [ ] Use prop destructuring in `Student.jsx` to extract `name` and `age` for cleaner code.

6. **Code Quality**:

   - [ ] Add comments to key sections of the code, particularly around the use of props and conditional rendering.
   - [ ] Ensure your code is clean, with clear naming conventions and organized files.

7. **Testing the Application**:
   - Run the application and check that each student’s name and age appear as expected.
   - Confirm that students over 21 are marked as "Mature Student."

## Bonus Challenge

- Try adding styling to differentiate "Mature Student" visually, like changing the text color or using bold font.

## Tips

- Remember, components allow for modular and reusable code. By breaking down your UI into smaller parts, each component becomes easier to understand and manage.
- Passing props enables data flow from a parent to a child component, making it possible to reuse components in various contexts.

Happy coding!
