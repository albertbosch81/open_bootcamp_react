import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';
import RegisterPage from './pages/auth/RegisterPage';

function AppRoutingFinal() {

  // TODO Change to conditional value
  let loggedIn = true;


  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path='/' element={
            loggedIn?
            (<Navigate replace to='/dashboard'/>)
            :
            (<Navigate replace to='/login'/>)
          }></Route>
          {/* Login*/}
          <Route exact path='/login' element={<LoginPage/>}></Route>
          {/* Dashboard */}
          <Route exact path='/dashboard' element={
            loggedIn?
            (<DashBoard></DashBoard>)
            :
            (<Navigate replace to='/login'/>)
          }></Route>
          <Route exact path='/register' element={<RegisterPage/>} />

          <Route element={<NotFoundPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutingFinal;
