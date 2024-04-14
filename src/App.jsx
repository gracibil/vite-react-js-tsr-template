import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
function App() {
  const root = window.document.documentElement
  root.classList.add('dark')

  return (
    <div className='flex flex-col'>
    <div className='sticky top-0 left-0 mr-auto'>
      <Link to='/'>
      <Button variant='outline'>Home</Button>
      </Link>

      <Link to='/vite'>
      <Button variant='outline'>Vite</Button>
      </Link>

      <Link to='/react'>
      <Button variant='outline'>React</Button>
      </Link>

      <Link to='/tailwind'>
      <Button variant='outline'>TalwindCss</Button>
      </Link>

      <Link to='/shadcn'>
      <Button variant='outline'>ShadCN</Button>
      </Link>

      <Link to='/react-router'>
      <Button variant='outline'>React-router</Button>
      </Link>

      <Link to='/vitest'>
      <Button variant='outline'>Vitest</Button>
      </Link>

    </div>
    <div className='flex flex-col w-[100vw]'>
      <Outlet />
    </div>

    </div>
  )
}

export default App
