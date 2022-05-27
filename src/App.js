import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login, SignUp, Home } from './pages/test'
import { Dashboard } from './pages/dashboard';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import UserAuth, { MainState } from './context/main__state';
import { useEffect } from 'react';




function App() {

  return (
    <>
      <MainState>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path="home" element={<Home />} />
              <Route path="signup" element={<SignUp />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="dashboard" element={<Dashboard />}></Route>
            </Routes>
          </BrowserRouter>
      </MainState>
    </>
  );
}



export default App;
