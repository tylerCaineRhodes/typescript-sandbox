import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  const todo = res.data as todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logtodo(id, title, completed);
});

const logtodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The todo with Id: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
  `);
}

