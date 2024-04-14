import reactLogo from '../assets/react.svg'
import { useState } from 'react';
import { Button } from '@/components/ui/button';
const ReactPage =()=>{
    const [count, setCount] = useState(0)

    return(
        <>  
        <div className='self-center'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </div>
            

            <h1>What is React?</h1>

            <p className='w-1/2 self-center m-4'>
            React lets you build user interfaces out of individual pieces called components. 
            Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.
            Whether you work on your own or with thousands of other developers, using React feels the same. 
            It is designed to let you seamlessly combine components written by independent people, teams, and organizations.
            </p>



            <h1>Example</h1>

            <p className='w-1/2 self-center m-4'>
                This button below which is a component from shadCN found in src/components/ui uses react state to update the count: {count}
            </p>
            <Button className='w-16 self-center' variant='outline' onClick={()=>setCount((count) => count + 1)}>Press me</Button>

            
            <p className='w-1/2 self-center m-4'>
                This state may be used in various places; you pressed the button {count} times
            </p>


            <a href='https://reactrouter.com/en/main/start/tutorial' target='_blank'>Explained in detail in the tutorial</a>
        
        </>
    )
}

export default ReactPage;