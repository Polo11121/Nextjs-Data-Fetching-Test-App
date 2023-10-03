import type { Post } from "@/types";
import { env } from "@/lib";

export const getUserPosts = async (
  userId: string
): Promise<Post[] | undefined> => {
  const response = await fetch(`${env.API_URL}/posts?userId=${userId}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    return undefined;
  }

  return response.json();
};
