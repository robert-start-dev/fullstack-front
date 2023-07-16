import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

const [users, setUsers] = useState([]);

    useEffect(() => {

        loadUsers();
       // document.title = `Testing React useEffect`;
        //bizarre behaviour, only works with this document.title line of code inserted (o,o)
    }, []);


const loadUsers = async() => {

    const result = await axios.get("http://localhost:8080/users");
    //console.log(result.data);//works here
  
  
 /**  setUsers([
    ...users,
    { id: 'id', username: 'username', name: 'name', email: 'email' }
  ]); **/

  setUsers(result.data); //data disappears here



  console.log(result.data);//works here
  console.log(users); //no users set?!?!
};
return (

   <div className="Container">
        <div className="py-4">

        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">User Name</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {
        
        users.map((user, index)=> ( 

    <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.username}</td>
      <td>{user.name}</td>      
      <td>{user.email}</td>
    </tr>

        ))
    }
    
   
  </tbody>
</table>

        </div> 
    
    
    
    </div>
  )
}
