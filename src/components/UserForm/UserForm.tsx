import React from 'react';

const UserForm = () => {
  return (
    <form>
      <h3>Add new User:</h3>

      <div className="form-group">
        <label htmlFor="name">Имя:</label>
        <input
          className="form-control"
          id="name"
          type="text"
          name="name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input
          className="form-control"
          id="email"
          type="email"
          name="email"/>
      </div>

      <div className="form-group">
        <label htmlFor="activity">Активен:</label>
        <input
          className="form-control"
          id="activity"
          type="checkbox"
          name="activity"
        />
      </div>

      <div className="form-group">
        <label htmlFor="role">Роль:</label>
        <select
          className="form-control"
          id="role"
          name="role"
        />
      </div>
    </form>
  );
};

export default UserForm;