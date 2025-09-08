import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { Admincontext } from '../context/Admincontext'
import { toast } from 'react-toastify'

const Allusers = ({token}) => {
  const {backendUrl} = useContext(Admincontext)
  const [users, setUsers] = useState([])


  const getAllUsers = async () => {
   
    if(!token){
      return null
    }
    try {
      const {data} = await axios.post(backendUrl + "/api/user/allusers", {}, {headers:{token}})
      if(data.success){
        setUsers(data.users)
        toast.success("fetched all users", {
        toastId : "success"
      })
      }else{
        toast.error(data.message, {
        toastId : "error"
      })
      }
    } catch (error) {
        console.log(error.message);
        toast.error(error.message, {
        toastId : "error"
      })
        
    }

  }

  const removeUser = async (id) => {
   try {
    const {data} = await axios.post(backendUrl + "/api/user/removeuser", {id}, {headers : {token}})
    if(data.success){
      getAllUsers()
      toast.success(data.message, {
        toastId : "success"
      })

    }else{
      toast.error(data.message, {
        toastId : "error"
      })
    }
   } catch (error) {
     console.log(error.message);
     toast.error(error.message, {
        toastId : "error"
      })
     
   }
    

  }


  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <>
      <main className='bg-white rounded-lg p-5 w-full '>
        <div className='flex justify-between items-center mb-8'>
          <p className='text-[#2F73F2]'>All Users</p>
          <img className='w-[30px]' src={assets.button2} alt="" />
        </div>
      
     <div className='overflow-x-scroll hide'>
     <table border={1} className='w-full whitespace-nowrap '>
        <thead className=''>
        <tr className='text-gray-400'>
          <td className=''>UserId</td>
          <td>Name</td>
          <td>Email</td>
          <td>Action</td>
        </tr>
      </thead>
      {users.map((user, index) => (

      <tbody>
        <tr className='text-[#102D47] border border-gray-300'>
          <td>{user._id}</td>
          <td>{user.firstName + " " + user.lastName}</td>
          <td>{user.email}</td>
          <td> <img onClick={() => removeUser(user._id)} className='w-[20px]' src="https://cdn-icons-png.freepik.com/256/7695/7695673.png?ga=GA1.1.2728068.1744452084&semt=ais_hybrid" alt="" /> </td>
        </tr>
      </tbody>
           ))}

     </table>
      </div>


      </main> 
    </>
  )
}

export default Allusers
