import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/landingPage'
import Ehancer from './components/Ehancer'
import LoginPage from './components/LoginPage'
import UserProctedRouter from './utils/UserProctedRouter'
import Logout from './components/Logout'
import ProfilePage from './components/ProfilePage'

const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<LandingPage />}  />
        <Route path='/Ehancer'
         element={
          <UserProctedRouter>
            <Ehancer/>
          </UserProctedRouter>
            } />

        <Route path='/logout'
         element={
          <UserProctedRouter>
            <Logout/>
          </UserProctedRouter>
            } />
        <Route path='/profile'
         element={
          <UserProctedRouter>
            <ProfilePage/>
          </UserProctedRouter>
            } />


        <Route path='/Login' element={<LoginPage />}  />

    </Routes>
      
    </>
  )
}

export default App
