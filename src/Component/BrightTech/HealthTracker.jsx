// import { useState } from 'react';
import './Bright.css';
import WelcomePage from './WelcomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Todopage from './TodoPage';
import Footer from './Footer';
import HomePage from './HomePage';
// import {useAuth } from './Security/AuthContext';
import AuthProvider from './Security/AuthContext';
import ErrorMsg from './ErrormessageComponent';
import DescCompo from './DescriptionPage';





// function AuthenticationRoute({ children }) {
//   const authContext = useAuth()
  
//  if(authContext.isAuthenticated){
//   return children;
// }
// return <Navigate to='/'></Navigate>
// }


//npm install react-router-dom
export default function HealthTracker() {
  return(
    <>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage/>}></Route>
      <Route path='/homepage' element={<HomePage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/welcome/:name" element={<WelcomePage/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path='/Todopage/:name' element={<Todopage/>}></Route>
      <Route path='/description/:id' element={<DescCompo/>}></Route>
      <Route path='*' element={<ErrorMsg/>}></Route>
    </Routes>
     <Footer/>
    </BrowserRouter>
    </AuthProvider>
       </>
  )
}


 