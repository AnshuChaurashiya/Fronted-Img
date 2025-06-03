import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'

const UserProctedRouter = ({ children }) => {
    const navigate = useNavigate()
    const { user } = useContext(UserDataContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      // checking if user is authenticated
      const token = localStorage.getItem('token')
      if(!token){
          navigate('/login')
          return  
      }

      // if user is authenticated but no user data
      if(!user || !user.email){
          setLoading(true)
      } else {
          setLoading(false)
      }
    }, [user, navigate])

    if(loading){
        return <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div> 
    }

    // If we have user data, render the protected content
    if(user && user.email){
        return children
    }

    // If we don't have user data, don't render anything (will redirect to login)
    return null
}

export default UserProctedRouter
