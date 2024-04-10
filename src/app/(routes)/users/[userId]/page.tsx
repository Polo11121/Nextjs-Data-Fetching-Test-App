import { Suspense } from "react";
import { getUser, getUserPosts, getUsers } from "@/api";
import { notFound } from "next/navigation";
import { PostsList } from "@/user/components";

type UserPageProps = {
  params: {
    userId: string;
  };
};

export const generateMetadata = async ({
  params: { userId },
}: UserPageProps) => {
  const user = await getUser(userId);
  const data = await getUserPosts(userId);

  if (!user) {
    return {
      title: "User not found",
      description: "Brett Westwood - Software Engineer",
    };
  }

  return {
    title: `${user.name} (${user.email}) - ${data?.posts?.length || 0} posts`,
    description: "Brett Westwood - Software Engineer",
  };
};

export const generateStaticParams = async () => {
  const data = await getUsers();

  return data?.users?.map(({ id }) => ({
    userId: id.toString(),
  }));
};

const UserPage = async ({ params: { userId } }: UserPageProps) => {
  const user = await getUser(userId);
  const postsPromise = getUserPosts(userId);

  return user ? (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">User {user.name} page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PostsList postsPromise={postsPromise} />
      </Suspense>
    </div>
  ) : (
    notFound()
  );
};

export default UserPage;
