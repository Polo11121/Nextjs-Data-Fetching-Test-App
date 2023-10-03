import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
  DOG_API_URL: str(),
  API_URL: str(),
});
