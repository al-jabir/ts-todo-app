import { TodoApp } from './todo';

// Create a new instance of the app
const app = new TodoApp();

// Add some to-dos
app.addTodo('TypeScript is a superset of JavaScript.');
app.addTodo('CRUD operations help build applications.');

// View all to-dos
app.getTodos();

// Update a to-do
app.updateTodo(1, 'Learn advanced TypeScript.');

// Delete a to-do
app.deleteTodo(2);

// View all to-dos again
app.getTodos();
