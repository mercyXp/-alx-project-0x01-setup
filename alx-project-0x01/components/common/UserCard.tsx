import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md mx-auto mb-6">
      <h2 className="text-xl font-bold mb-2">{user.name} (@{user.username})</h2>
      <p className="text-gray-600 mb-1">📧 {user.email}</p>
      <p className="text-gray-600 mb-1">📞 {user.phone}</p>
      <p className="text-gray-600 mb-1">🌐 {user.website}</p>
      <p className="text-gray-800 font-medium mt-4">🏢 {user.company.name}</p>
      <p className="text-sm italic text-gray-500">"{user.company.catchPhrase}"</p>
      <p className="text-gray-500 text-sm">{user.address.suite}, {user.address.street}, {user.address.city}</p>
      <p className="text-gray-400 text-xs">Zip: {user.address.zipcode}</p>
    </div>
  );
};

export default UserCard;
