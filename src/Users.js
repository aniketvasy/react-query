import React, { useState } from "react";
import * as api from "./api/userApi";
import { useQuery } from "react-query";
const Users = ({setUserId}) => {
  const { data: userData, isLoading, isError } = useQuery("user", api.getUsers);
  // const [user,setUser] = useState(data.data)
  if (isLoading) {
    console.log("is Loading");
  }
  if (!isLoading) {
    console.log("user Data", userData.data);
  }

  return (
    <>
      {isLoading && "loading"}
      {!isLoading && (
        <ul>
          {userData.data?.map((user) => (
            <li key={user.id} onClick={()=>setUserId(user.id)}>{user.first_name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Users;
