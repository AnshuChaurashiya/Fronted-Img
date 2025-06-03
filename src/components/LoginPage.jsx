import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import  {UserDataContext}  from '../context/UserContext';

const LoginPage = () => {
  const [formType, setFormType] = useState('login'); // 'login' or 'signup'
  const { setUser } = useContext(UserDataContext)
  const navigate = useNavigate()
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [error, setError] = useState('')

  const loginHandler = async (e) => {
    e.preventDefault()
    try {
      console.log('Attempting login with:', { email })
      
      const response = await axios.post('http://localhost:3000/user/login', {
        email,
        password
      })

      console.log('Login response:', response.data)
      if(response.status === 200){
        const { user, token } = response.data
        // Store token in localStorage
        localStorage.setItem('token', token)
        setemail('')
        setpassword('')
        setUser(user)
        navigate('/Ehancer')
      }
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message)
      setError(error.response?.data?.message || 'Login failed. Please check your credentials.')
    }
  }

  const signupHandler = async (e) => {
    e.preventDefault()
    try {
      const newUser = {
        name,
        email,
        password
      }
      console.log('Attempting signup with:', { name, email })
      const response = await axios.post('http://localhost:3000/user/register', newUser)

      console.log('Signup response:', response.data)
      if(response.status === 201){
        const { user, token } = response.data
        // Store token in localStorage
        localStorage.setItem('token', token)
        setname('')
        setemail('')
        setpassword('')
        setUser(user)
        navigate('/Ehancer')
      }
    } catch (error) {
      console.error('Signup error:', error.response?.data || error.message)
      setError(error.response?.data?.message || 'Registration failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="md:w-1/2 bg-gradient-to-tr from-blue-600 to-indigo-700 text-white flex items-center justify-center p-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome Pic Enhancer</h1>
          <p className="text-lg sm:text-xl mb-10 max-w-3xl">
            Your all-in-one free AI photo editor. Create professional photos and
            bring your ideas to life effortlessly.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                setFormType('login')
                setError('')
              }}
              className={`px-6 py-2 rounded-full transition ${
                formType === 'login' ? 'bg-white text-blue-600' : 'bg-blue-500'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setFormType('signup')
                setError('')
              }}
              className={`px-6 py-2 rounded-full transition ${
                formType === 'signup' ? 'bg-white text-blue-600' : 'bg-blue-500'
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel (Form Section) */}
      <div className="md:w-1/2 flex items-center justify-center bg-gray-100 p-6">
        <AnimatePresence mode="wait">
          {formType === 'login' ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
              {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                  {error}
                </div>
              )}
              <form onSubmit={loginHandler} className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
                >
                  Login
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up</h2>
              {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                  {error}
                </div>
              )}
              <form onSubmit={signupHandler} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
                >
                  Sign Up
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoginPage;
