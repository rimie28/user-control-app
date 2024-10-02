import React from "react";
import { User } from "../../types";
import UserItem from "./UserItem.tsx";

interface Props {
  users: User[];
}

const Users: React.FC<Props> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </>
  );
};

export default Users;
