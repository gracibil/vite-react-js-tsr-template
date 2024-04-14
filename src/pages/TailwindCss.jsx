import tailwindlogo from '../assets/tailwindcss-logotype-white.svg';
const TailwindPage =()=>{
    return(
        <>  
        <div className='self-center'>
        <a href="https://tailwindcss.com/" target="_blank">
                <img src={tailwindlogo} className='logo self-center' alt="React Router Logo" />
        </a>
        </div>
            

            <h1>What is Tailwind?</h1>

            <p className='w-1/2 self-center m-4'>
            A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

            </p>

            <h1>Example</h1>

            <p className='w-1/2 self-center m-4'>
                open the Tailwind.jsx page and adjust the classes to see css changes, try adding bg-red-500 to the div tag or text-green-200 to the p tags
            </p>

            <a href='https://tailwindcss.com/docs/configuration' target='_blank'>Check out the configuration for tailwind</a>
        
        </>
    )
}

export default TailwindPage;