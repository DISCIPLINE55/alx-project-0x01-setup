import React, { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [usersList, setUsersList] = useState<UserProps[]>(posts);

  const handleAddUser = (newUser: UserData) => {
    const id = usersList.length > 0 ? Math.max(...usersList.map((u) => u.id)) + 1 : 1;
    const userToAdd: UserProps = {
      id,
      name: newUser.name || "Unnamed",
      username: newUser.username || `user${id}`,
      email: newUser.email || `user${id}@mail.com`,
      address: {
        street: "",
        suite: "",
        city: newUser.address?.city || "",
        zipcode: "",
        geo: { lat: "0", lng: "0" },
      },
      phone: newUser.phone || "",
      website: newUser.website || "",
      company: {
        name: newUser.company?.name || "",
        catchPhrase: newUser.company?.catchPhrase || "",
        bs: newUser.company?.bs || "",
      },
    };
    setUsersList((prev) => [userToAdd, ...prev]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-600 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {usersList.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>

      {isModalOpen && <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts: UserProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
