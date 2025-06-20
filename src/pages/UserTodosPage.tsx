import { useLoaderData, type LoaderFunctionArgs } from "react-router-dom";

interface TodoParams {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const userTodosLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/todos`)
  const todos = await response.json();
  return todos;
}

function UserTodosPage() {
  const todos = useLoaderData() as TodoParams[];
  return (
    <>
    <h2>Todos</h2>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} readOnly />
          {todo.title}
        </li>
      ))}
    </ul>
    </>
  )
}

export default UserTodosPage