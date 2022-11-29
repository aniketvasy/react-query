import React from 'react'
import * as api from './api/userApi';   
import { useQuery } from 'react-query';

const UserDetail = ({userId}) => {
    const {data:userData,isLoading}=useQuery(['user',userId],()=>api.getUser(userId))
   !isLoading&& console.log("userdata",userData.data)
  return (
      <>{
          
      !isLoading&&<div>{userData.data.first_name}</div>
      
      }
      {
        isLoading&&"...Loading"
      }
      </>
   
  )
}

export default UserDetail