import { Post } from "@/types";

type PostsListProps = {
  postsPromise: Promise<{ posts: Post[] } | undefined>;
};

export const PostsList = async ({ postsPromise }: PostsListProps) => {
  const data = await postsPromise;

  return data ? (
    data?.posts?.map(({ id, title, body }) => (
      <div key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    ))
  ) : (
    <div>Posts not found</div>
  );
};
