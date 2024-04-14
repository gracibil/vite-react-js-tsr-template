import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ReactRouterPage from './pages/React-router.jsx'
import Home from './pages/Home.jsx'
import VitePage from './pages/Vite.jsx'
import ReactPage from './pages/React.jsx'
import TailwindPage from './pages/TailwindCss.jsx'
import './index.css'
import { createBrowserRouter, 
          RouterProvider 
        } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
    {
      path: '/react-router',
      element: <ReactRouterPage/>

    },
    {
      path: '/',
      element: <Home/>
    
    },
    {
      path: '/vite',
      element: <VitePage/>
    
    },
    {
      path: '/react',
      element: <ReactPage/>
    
    },
    {
      path: '/tailwind',
      element: <TailwindPage/>
    
    }
  
  ]
  },
  
])        

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
