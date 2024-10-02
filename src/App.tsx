import UserForm from './components/UserForm/UserForm.tsx';
import Users from './components/Users/Users.tsx';

const App = () => {


  return (
    <>
      <main className="container p-5">
        <div className="row justify-content-center">
          <div className="col-5 mb-2">
            <UserForm/>
          </div>
          <div className="col-5 mb-2">
            <Users/>
          </div>
        </div>
      </main>
    </>
  )
};

export default App
