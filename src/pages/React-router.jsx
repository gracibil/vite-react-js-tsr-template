import routerlogo from '../assets/react-router-color-inverted.svg';
const ReactRouterPage =()=>{
    return(
        <>  
        <div className='self-center'>
        <a href="https://reactrouter.com/en/main" target="_blank">
                <img src={routerlogo} className='logo self-center' alt="React Router Logo" />
        </a>
        </div>
            

            <h1>What is React Router?</h1>

            <p className='w-1/2 self-center m-4'>
                React Router enables "client side routing".
                In traditional websites, the browser requests a document from a web server, 
                downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. 
                When the user clicks a link, it starts the process all over again for a new page.
                Client side routing allows your app to update the URL from a link click without making another request for another document from the server. 
                Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.
                This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and 
                JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.
            </p>

            <h1>Example</h1>

            <p className='w-1/2 self-center m-4'>
                For an example of react-router take a look into the main.jsx file there you will find a router object created with createBrowserRouter 
                function from react-router-dom package. This object is passed to the RouterProvider component from the same package. 
                This object is used to define the routes of the application. The routes are defined as children of the main route. This allows them to be rendered
                in the App.jsx component using the Outlet component from react-router-dom package.
            </p>

            <a href='https://reactrouter.com/en/main/start/tutorial' target='_blank'>Explained in detail in the tutorial</a>
        
        </>
    )
}

export default ReactRouterPage;