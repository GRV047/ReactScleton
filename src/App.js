import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login, SignUp, Home } from './pages/test'
import {
  Routes,
  Route,
} from "react-router-dom"


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="home" element={<Home />} />
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>

      </Routes>
    </>
  );
}



export default App;
