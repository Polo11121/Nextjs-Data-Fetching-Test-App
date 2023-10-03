import { notFound } from "next/navigation";
import { getUsers } from "@/api";
import Link from "next/link";

export const generateMetadata = async () => {
  const users = await getUsers();

  if (!users)
    return {
      title: "Users not found",
      description: "Brett Westwood - Software Engineer",
    };

  return {
    title: `${users.length} - Users found`,
    description: "Brett Westwood - Software Engineer",
  };
};

const UsersPage = async () => {
  const users = await getUsers();

  return users ? (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">Users Page</h1>
      {users.map(({ id, name, email }) => (
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
