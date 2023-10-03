import type { User } from "@/types";
import { env } from "@/lib";

export const getUser = async (userId: string): Promise<User | undefined> => {
  const response = await fetch(`${env.API_URL}/users/${userId}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    return undefined;
  }

  return response.json();
};
