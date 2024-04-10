import type { User } from "@/types";
import { env } from "@/lib";

export const getUsers = async (): Promise<{ users: User[] } | undefined> => {
  const response = await fetch(`${env.API_URL}/users`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    return undefined;
  }

  return response.json();
};
