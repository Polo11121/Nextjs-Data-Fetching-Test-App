import { env } from "@/lib";

export const getDogs = async () => {
  const response = await fetch(env.DOG_API_URL);

  const data = await response.json();

  return data;
};
