# Exercise: Creating Your First React App with Vite

## Challenge

In this exercise, you will create your first React application using the Vite build tool. You'll follow instructions to set up the project, install the necessary dependencies, and launch your application. By the end, you'll have a working React application created with Vite.

## Key Learnings

- How to set up a React application
- Understanding the role and benefits of the Vite build tool in modern front-end development

## User Story

As a developer, I want to set up a React application using Vite, so that I can quickly build and run a modern front-end application with fast performance and efficient development tools.

## Acceptance Criteria

1. **Project Setup**:

   - [ ] Install Vite globally or use the npm create command to initiate a new Vite project.
   - [ ] Choose the "React" template when creating the Vite project.

2. **Project Structure**:

   - [ ] Verify that the project directory includes a `src` folder with the initial React files.
   - [ ] Confirm that the project has a `package.json` file with Vite and React dependencies listed.

3. **Dependency Installation**:

   - [ ] Run `npm install` (or `yarn install`) to install all project dependencies.
   - [ ] Ensure that `react` and `react-dom` are listed in the `package.json` dependencies.

4. **Application Launch**:

   - [ ] Start the application using `npm run dev` or `yarn dev`.
   - [ ] Access the application in the browser at `http://localhost:3000` (or the port Vite designates).
   - [ ] Verify that the initial React page renders successfully.

5. **Understanding Vite’s Role**:
   - [ ] Review the configuration files (like `vite.config.js`) to understand Vite’s basic setup.
   - [ ] Write a brief summary (2–3 sentences) about why Vite is a preferred tool for building React apps compared to older build tools like Create React App (CRA).

## Instructions

1. **Setting Up Vite**: Use the command below to create your new Vite project with a React template:

   ```bash
   npm create vite@latest my-first-react-app
   ```

   - Select a Framework, choose React
   - Select a Variant, choose Javascript

2. Navigating and Installing:
   - Navigate into your project folder
   ```bash
   cd my-first-react-app
   ```
   - Install dependencies:
   ```bash
   npm install
   ```
3. Launching the App:

- Run the development server

```bash
npm run dev
```

- Open the provided local server address (usually http://localhost:3000) in your browser to view your app, but check the console to see the URL the app is running on.

4. Exploring Vite Configuration:

- Open the `vite.config.js` file to review Vite’s configuration.
- Write down 2–3 reasons why Vite is known for its speed and performance improvements over Create React App (CRA).

## Tips

Vite provides a very fast development server and build process, leveraging ES modules.
The project template includes a simple starting point, making it easier to experiment and build upon.
