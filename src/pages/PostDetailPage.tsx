import { useLoaderData, type LoaderFunctionArgs } from "react-router-dom"

interface PostParams {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface CommentParams {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const postLoader = async ({ params }: LoaderFunctionArgs) => {
  const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const post = await postResponse.json();
  const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`)
  const comments = await commentResponse.json();

  return { post, comments };
}

function PostDetailPage() {
  const { post, comments } = useLoaderData() as { post: PostParams, comments: CommentParams[] };
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}
          </li>
        ))}
      </ul>

    </>
  )
}

export default PostDetailPage