import { Link, useLoaderData, useParams, type LoaderFunctionArgs } from "react-router-dom";

interface UserPostParams 
  {
    userId: number;
    id: number;
    title: string;
  }

export const userPostLoader = async ({params}: LoaderFunctionArgs) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id
  }/posts`); 
  const posts = await response.json()
  return posts;
};

function UserPostPage() {
  const posts = useLoaderData() as UserPostParams[];
   const { id } = useParams();

  return (
    <>
    <h2>Posts</h2>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/users/${id}/posts/${post.id}`}></Link>
          <h3>{post.title}</h3>
        </li>
      ))}
    </ul>
    </>
  )
}

export default UserPostPage