import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const UserDataContext = createContext()

const UserContext = ({children}) => {
    const [user, setUser] = useState(() => {
      // set data user in local storage
      const saveUser = localStorage.getItem('user')
      return saveUser ? JSON.parse(saveUser) : null
    })

    // using useeffect for user data to fetch
    useEffect(() => {
      const token = localStorage.getItem('token')
      if(token && (!user || !user.email)){
        axios.get('http://localhost:3000/user/profile', {
          headers:{
            'Authorization': `Bearer ${token}`
          }
        })
        .then(response => {
          if(response.status === 200){
            setUser(response.data.user)
          }
        })
        .catch(error =>{
          console.error('Error restoring user session:', error)
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          setUser(null)
        })
      }
    }, [user])

    // update localstorage when user state changes
    useEffect(() => {
      if(user){
        localStorage.setItem('user', JSON.stringify(user))
      } else {
        localStorage.removeItem('user')
      }
    }, [user])

    return (
      <UserDataContext.Provider value={{user, setUser}}>
        {children}
      </UserDataContext.Provider>
    )
}

export default UserContext
 