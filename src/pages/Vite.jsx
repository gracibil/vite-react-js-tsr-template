import viteLogo from '/vite.svg'
const VitePage =()=>{
    return(
        <>  
        <div className='self-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        </div>
            

            <h1>What is Vite?</h1>

            <p className='w-1/2 self-center m-4'>
            Vite (French word for "quick", pronounced /vit/, like "veet") 
            is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:
            A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).
            A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.
            Vite is opinionated and comes with sensible defaults out of the box. Read about what's possible in the Features Guide. 
            Support for frameworks or integration with other tools is possible through Plugins. The Config Section explains how to adapt Vite to your project if needed.
            Vite is also highly extensible via its Plugin API and JavaScript API with full typing support.
            You can learn more about the rationale behind the project in the <a href='https://vitejs.dev/guide/why.html' target='_blank'>Why vite</a> section.
            </p>


            <h1>Usage</h1>

            <p className='w-1/2 self-center m-4'>
                npm run dev - Command to start the dev server <br/>
                npm run build - Command to build the project
            </p>


            <h1>Example</h1>

            <p className='w-1/2 self-center m-4'>
                For an example of HMR open the vite.jsx file and change this text
            </p>

            <a href='https://reactrouter.com/en/main/start/tutorial' target='_blank'>Explained in detail in the tutorial</a>
        
        </>
    )
}

export default VitePage;