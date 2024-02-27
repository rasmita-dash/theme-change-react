import {Outlet, createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route} from 'react-router-dom';
import { useContext, useState } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Todos from './Components/Todos';
import OtpLogin from './Components/OtpLogin'
import { ThemeProvider, ThemeContext } from './theme-context';

function App() {
  // const [isDarkMode, setIsDarkMode] =useState(false);
  // const themeContext = useContext(ThemeContext);    

  return (
    <div className="App">
      {/* <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}> */}
      <ThemeProvider>
      <BrowserRouter> 
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element= {<Home/>}></Route>
          <Route path='/Home' element= {<Home/>}></Route>
          <Route path='/About' element= {<About/>}></Route>
          <Route path='/Contact' element= {<Contact/>}></Route>
          <Route path='/Todos' element= {<Todos/>}></Route>
          <Route path='/OtpLogin' element= {<OtpLogin/>}></Route>
        </Routes>
        <div className='footer'> Footer Component</div>
      </BrowserRouter>
      </ThemeProvider>
      {/* </ThemeContext.Provider> */}
    </div>
  );
}

export const Router = createBrowserRouter(
  [{
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {path:'/', element:Home},
      {path:'/Home', element:Home},
      {path:'/About', element:About},
      {path:'/Contact', element:Contact},
    ]
  }]);

export default App;
