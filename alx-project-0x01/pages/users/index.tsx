import { useState } from 'react';
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState(posts);

  const handleAddUser = (userData: UserData) => {
    // Add an ID to the new user
    const newUser = {
      ...userData,
      id: users.length + 1,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-6 bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">User Directory</h1>
          <button 
            type="button"
           onClick={() => setIsModalOpen(true)}
          className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition-colors">
            Add User
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((user: UserProps) => (
            <UserCard key={user.id} user={user} />
          ))}

        </div>
      </main>
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddUser}
      />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts
    }
  };
}

export default Users;