import UserForm from './components/UserForm/UserForm.tsx';
import Users from './components/Users/Users.tsx';
import { useState } from 'react';
import { User } from './types';

const App = () => {

  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'John', email: "johnmay@gmail.com", active: true, role: 'user'},
    {id: '1', name: 'Olga', email: "olga@gmail.com", active: false, role: 'user'},
    {id: '1', name: 'Tatyana', email: "tatyana@gmail.com", active: true, role: 'user'}
  ]);

  const addNewUser = (newUser: User) => {
    setUsers(prevState => [...prevState, newUser]);
  }

  return (
    <>
      <main className="container p-5">
        <div className="row justify-content-center">
          <div className="col-5 mb-2">
            <UserForm addNewUser={addNewUser} />
          </div>
          <div className="col-5 mb-2">
            <Users users={users} />
          </div>
        </div>
      </main>
    </>
  )
};

export default App
