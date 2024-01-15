
import './App.css';
import LoginHeader from './Components/LoginHeader';
import AdminHome from './Pages/AdminHome';
import Home from './Pages/Home'
import Packages from './Pages/Packages';
import ViewSinglePackage from './Pages/ViewSinglePackage';
import AdminLogin from './Pages/AdminLogin';
import UserQuery from './Pages/UserQuery';
import AddDelPackages from './Pages/AddDelPackages';
import AddPackage from './Pages/AddPackage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<AdminLogin/>}/>
      <Route path="/Packages" element = {<Packages/>} />
      <Route path="/AdminHome" element={<AdminHome/>}/>
      <Route path="/TourPackage" element={<ViewSinglePackage/>}/>
      <Route path="/UserList" element={<UserQuery/>}/>
      <Route path ="/ManagePackage" element={<AddDelPackages/>}/>
    </Routes> */}
    <AddPackage/>
    </BrowserRouter>
   
    </>
  );
}

export default App;
