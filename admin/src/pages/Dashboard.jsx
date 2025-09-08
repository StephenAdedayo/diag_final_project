import React, { useContext } from 'react'
import { Admincontext } from '../context/Admincontext'

const Dashboard = () => {
      const {isSideBarOpen, setIsSideBarOpen} = useContext(Admincontext)
  
  return (
    <div>
      dashboard
    </div>
  )
}

export default Dashboard
