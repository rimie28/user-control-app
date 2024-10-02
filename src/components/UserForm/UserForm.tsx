import React, { useState } from "react";
import { User, UserMutation } from "../../types";

interface UserFormProps {
  addNewUser: (newUser: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ addNewUser }) => {
  const [newUser, setNewUser] = useState<UserMutation>({
    name: "",
    email: "",
    active: false,
    role: "user",
  });

  const changeUser = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    if (e.target.type === "checkbox") {
      setNewUser((prevState) => ({
        ...prevState,
        [e.target.name]: (e.target.value as unknown as HTMLInputElement)
          .checked,
      }));
    } else {
      setNewUser((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newUser.name.trim().length === 0 && newUser.email.trim().length === 0) {
      alert("Заполните все поля.");
    } else {
      addNewUser({
        id: String(new Date()),
        ...newUser,
      });

      setNewUser({
        name: "",
        email: "",
        active: false,
        role: "user",
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add new User:</h3>

      <div className="form-group mb-3">
        <label htmlFor="name">Имя:</label>
        <input
          value={newUser.name}
          className="form-control"
          id="name"
          type="text"
          name="name"
          onChange={changeUser}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="email">E-mail:</label>
        <input
          value={newUser.email}
          className="form-control"
          id="email"
          type="email"
          name="email"
          onChange={changeUser}
        />
      </div>

      <div className="form-group form-check mb-3">
        <label htmlFor="activity">Активен:</label>
        <input
          checked={newUser.active}
          className="form-check-input"
          id="active"
          type="checkbox"
          name="active"
          onChange={changeUser}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="role">Роль:</label>
        <select
          value={newUser.role}
          className="form-control"
          id="role"
          name="role"
          onChange={changeUser}
        >
          <option value="user">Пользователь</option>
          <option value="editor">Редактор</option>
          <option value="admin">Администратор</option>
        </select>
      </div>

      <button className="btn btn-primary" type="submit">
        Create User
      </button>
    </form>
  );
};

export default UserForm;
