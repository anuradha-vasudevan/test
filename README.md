# 1. Component Structure

## App – Main component that stores the task data and manages the application state.
## HeaderArea – Displays the application header.
## TaskStatistics – Displays total, pending, in-progress, and completed task counts.
## TaskCreation – Provides the form to add a new task.
## TaskList – Displays the list of tasks in table.
## IndividualTask – Displays an individual task and provides actions such as changing the status and deleting the task.

# 2. Data Flow Between Components

## App passes the tasks data to TaskStatistics and TaskList through props.
## App passes the task update function to TaskCreation for adding new tasks.
## TaskList passes individual task data and actions to IndividualTask.
## IndividualTask uses the provided functions to change task status or delete a task.
## When the task state changes, the related components are automatically re-rendered with the updated data.

# 3. How to Run the Application
## Install dependencies
## Open the project folder in the terminal and run:
### npm install
## Start the development server
### npm run dev
## Open the application
## Open the URL shown in the terminal, usually:
## http://localhost:5173 The Task Management Dashboard will then be displayed in the browser.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
