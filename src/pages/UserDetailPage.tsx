import { Link, Outlet, useLoaderData, useParams, type LoaderFunctionArgs } from "react-router-dom";

interface UserDetailParams {
    id: number;
    name: string;
    username: string;
    email: string;
}

export const userDetailLoader = async ({params}: LoaderFunctionArgs) => {

  const response = await fetch (`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const userDetail = response.json()
  return userDetail;
}


function UserDetailPage() {
  const userDetail = useLoaderData() as UserDetailParams;
  const {id} = useParams();

  return (
    <>
    <h1>{userDetail.name}</h1>
    <h3>Username: {userDetail.username}</h3>
    <h4>Email: {userDetail.email}</h4>
    <nav>
     <ul>
      <li>
        <Link to={`/users/${id}/posts`}>View Posts</Link>
      </li>
      <li>
        <Link to={`/users/${id}/albums`}>View Albums</Link>
      </li>
      <li>
        <Link to={`/users/${id}/todos`}>View Todos</Link>
      </li>
     </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default UserDetailPage