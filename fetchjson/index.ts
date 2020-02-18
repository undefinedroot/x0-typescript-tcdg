import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// define structure of an object
// with datatype per property (type annotation)
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  // enforce returned object to have the same structure as the interface
  const { id, title, completed } = response.data as Todo;
  logTodo(id, title, completed);
});

// refactor as helper function
// use type annotation so that the arguments
// only receive the appropriate type
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: "${title}"
    Is it finished? ${completed}
  `);
};
