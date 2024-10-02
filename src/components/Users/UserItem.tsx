import React from "react";
import { User } from "../../types";

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div className="card mb-3 p-2">
      <div className="row justify-content-between">
        <div className="col-4">
          <img
            className="card-img"
            src="https://i1.sndcdn.com/artworks-000189080723-ez2uad-t500x500.jpg"
          />
        </div>
        <div className="col-6">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.email}</p>
          <p className="card-text">Активен: {user.active ? "Да" : "Нет"}</p>
          <p className="card-text">Role: {user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
