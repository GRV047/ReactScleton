import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer } from './defaultComponents/common-components';
import { SignUp, Login } from './pages/test'
import {
  Routes,
  Route,
} from "react-router-dom"


function App() {
  return (
    <div>
      <Header></Header>
      <Routes> 
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}



export default App;
