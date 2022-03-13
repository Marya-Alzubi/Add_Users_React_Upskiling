import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { useState } from 'react';
function App() {
  const [users, setUsers] = useState([]);
  const submitNewUserHandler = (enteredUsername, enteredAge) => {
    setUsers((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: enteredUsername,
          age: enteredAge,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <div>
      <AddUser onSubmitNewUser={submitNewUserHandler} />
      {users.length !== 0 && (<UsersList users={users} />)}
    </div>
  );
}

export default App;
