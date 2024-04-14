import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
const Home = () => {
  const [count, setCount] = useState(0)
  const root = window.document.documentElement
  root.classList.add('dark')

  return (
    <>
      <h1 className=''>vite-react-js-TSR-template</h1>
      <div className="card">

        <p>
            A template for building React applications with Vite and Javascript, contains Tailwindcss, React-router, ShadCN components and Vitest.
            <br/>
            To learn more about all of these navigate to the respective pages by clicking on the buttons above.

        </p>
      </div>
    </>
  )
}

export default Home;