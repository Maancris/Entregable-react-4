import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import UsersForm from "./componente/UsersForm";
import UsersList from "./componente/UsersList";
import './App.css';




function App() {
  const [usersList, setUsersList] = useState([]);
  const [userselected, setUserSelected] = useState(null);

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsersList(res.data))
  }, []);

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then((res) => setUsersList(res.data))
  };

  const selectUser = (user) => {
    setUserSelected(user)
  };

  const deleteUsers = (id)=>{
    axios.delete (`https://users-crud1.herokuapp.com/users/${id}/`)
         .then(() => getUsers())
  }

  const deselectusers = () => setUserSelected(null);


  console.log(usersList)

  return (
    <div className="App_users">
      <div className="userList">
      <UsersList  
                 usersList={usersList}
                 selectUser={selectUser}
                 deleteUsers={deleteUsers}
      />
      </div>

      <div className="userForm">
      <UsersForm getUsers={getUsers}
                 userselected={userselected}
                 deselectusers={deselectusers}
      />
      </div>
      
    </div>
  );
}

export default App;









//   




//   retur   

//   <div className="App">
//   <UsersList usersList ={usersList} 
//              selectUser ={selectUser}  
//   /> 
//   <UsersForm getUsers ={getUsers}
//              select ={select} 
//              deselectusers = {deselectusers}
//   />
// </div>