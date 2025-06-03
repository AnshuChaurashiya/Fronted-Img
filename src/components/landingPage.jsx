import React from 'react'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col overflow-hidden">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-4 md:px-8   backdrop-filter ">
        <div className="flex items-center">
          {/* Placeholder for Logo */}
          <div className="flex items-center text-blue-700 text-2xl font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Pic Enhancer 
          </div>
         
        </div>

        {/* Placeholder for user icon/avatar */}
        {/* <div className="text-gray-700"> */}
            {/* User icon - uncommented and styled */}
             {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 hover:text-blue-700 transition duration-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg> */}
        {/* </div> */}

        {/* <button className='bg-blue-600 text-white px-5 py-2 rounded-full border border-dashed border-lg hover:bg-blue-700 transition-colors duration-300'>
          <a href='/Login'>Login</a>
        </button> */}
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          The <span className="text-blue-700">  Pic Enhancer </span> AI Photo Editor
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl">
          Your all-in-one free AI photo editor. Create professional photos and
          bring your ideas to life effortlessly.
        </p>
        <a href='/Ehancer' className="inline-block bg-blue-600 text-white text-xl  transition-all  font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-blue-700  duration-300 transform hover:scale-105">
          Get Started for Free
        </a> 
      </main>

      {/* Cookie Consent Banner - uncommented and styled */}
       {/* <div className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg text-gray-800 text-sm p-4 md:px-8 flex flex-col md:flex-row items-center justify-between shadow-lg">
        <p className="mb-3 md:mb-0 text-center md:text-left">
          This website uses cookies to ensure you get best experience. For more details visit our
          <a href="#" className="text-blue-600 hover:underline ml-1">Cookies Policy.</a>
        </p>
        <div className="flex space-x-3">
          <button className="border border-gray-300 px-5 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors duration-300">Decline</button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">Accept All Cookies</button>
        </div>
      </div> */}
    </div>
  )
}

export default LandingPage
