import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, phone, website, company, address }) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <span className="text-sm text-gray-500">#{id}</span>
      </div>
      <p className="text-gray-600 mb-2">Username: {username}</p>
      <p className="text-gray-600 mb-2">Email: {email}</p>
      <p className="text-gray-600 mb-2">Phone: {phone}</p>
      <p className="text-gray-600 mb-2">Website: {website}</p>
      <p className="text-gray-600 mb-2">Company: {company?.name}</p>
      <p className="text-gray-600">City: {address?.city}</p>
    </div>
  );
};

export default UserCard;
