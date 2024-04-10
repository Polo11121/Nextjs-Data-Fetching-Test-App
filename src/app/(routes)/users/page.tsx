import { notFound } from "next/navigation";
import { getUsers } from "@/api";
import Link from "next/link";

export const generateMetadata = async () => {
  const data = await getUsers();

  if (!data)
    return {
      title: "Users not found",
      description: "Brett Westwood - Software Engineer",
    };

  return {
    title: `${data.users.length} - Users found`,
    description: "Brett Westwood - Software Engineer",
  };
};

const UsersPage = async () => {
  const data = await getUsers();

  return data ? (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">Users Page</h1>
      {data.users.map(({ id, name, email }) => (
        <Link href={`/users/${id}`} key={id}>
          <p>{name}</p>
          <p>{email}</p>
        </Link>
      ))}
    </div>
  ) : (
    notFound()
  );
};

export default UsersPage;
