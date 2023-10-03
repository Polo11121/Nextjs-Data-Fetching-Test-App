import Link from "next/link";

const MainPage = () => (
  <div className="text-center mt-20">
    <h1 className="text-5xl font-bold">Main Page</h1>
    <Link href="/users">Users</Link>
  </div>
);

export default MainPage;
