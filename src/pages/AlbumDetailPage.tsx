import { Button } from "react-bootstrap";
import { useLoaderData, useParams, type LoaderFunctionArgs } from "react-router-dom";
import { useStore } from "../store/store";


 export interface PhotoParams {
    albumId?: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    userId: number;
}

export const userPhotosLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`);

  const photos = await response.json();
  return photos;
};

function AlbumDetailPage() {
  const photos = useLoaderData() as PhotoParams[];
  const { userId } = useParams();
  const { favorites, addFavorite, removeFavorite } = useStore()


  const handleFavoriteClick = (photo: PhotoParams) => {
    if (favorites.some((fav: PhotoParams) => fav.id === photo.id)) {
      removeFavorite(photo.id);
    } else {
      addFavorite({...photo, userId: Number(userId) });
    };
  };

  return (
    <>
    <h2>Photos</h2>
    <ul>
      {photos.map(photo => (
        <li key={photo.id}>
          <img src={photo.thumbnailUrl}/>
          <p>{photo.title}</p>
          <Button variant="danger" onClick={() => handleFavoriteClick(photo)}> {
            favorites.some((fav) => fav.id === photo.id) ? "Unfavorite" : "Favorite"
          }</Button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default AlbumDetailPage