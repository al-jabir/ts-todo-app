// To-Do Interface
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  
  // To-Do Operations
  export class TodoApp {
    private todos: Todo[] = [];
    private idCounter: number = 1;
  
    // ✅ Create a new to-do
    addTodo(title: string): void {
      const newTodo: Todo = { id: this.idCounter++, title, completed: false };
      this.todos.push(newTodo);
      console.log(`✅ To-Do added:`, newTodo);
    }
  
    // 📋 View all to-do
    getTodos(): void {
      if (this.todos.length === 0) {
        console.log(`📋 No to-dos available.`);
        return;
      }
  
      console.log(`📋 To-Do List:`);
      this.todos.forEach((todo) =>
        console.log(
          `ID: ${todo.id}, Title: ${todo.title}, Completed: ${todo.completed}`
        )
      );
    }
  
    // ✏️ Update an existing to-do
    updateTodo(id: number, title: string): void {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
        console.log(`✏️ To-Do updated:`, todo);
      } else {
        console.log(`❌ To-Do not found!`);
      }
    }
  
    // 🗑️ Delete a to-do
    deleteTodo(id: number): void {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        const deleted = this.todos.splice(index, 1);
        console.log(`🗑️ To-Do deleted:`, deleted[0]);
      } else {
        console.log(`❌ To-Do not found!`);
      }
    }
  }
  