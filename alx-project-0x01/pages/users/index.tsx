import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { GetStaticProps } from "next";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>
    </div>
  );
};

// This runs at build time
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};

export default Users;
