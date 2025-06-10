import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router-dom";

interface AlbumParams {
    userId: number;
    id: number;
    title: string;
}

export const userAlbumLoader = async ({params}: LoaderFunctionArgs) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/albums`)
  const albums = await response.json();
  return albums;
}

function UserAlbumPage() {
  const albums = useLoaderData() as AlbumParams[];
  return (
    <>
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <Link to={`/users/${album.userId}/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default UserAlbumPage;