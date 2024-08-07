
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
import store from './Store/store';
import {Provider} from 'react-redux';
import ProtectedRoutes from './Utils/ProtectedRoutes';


function App() {
  
  return (
    <>
    <Provider store = {store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<AdminLogin/>}/>
      <Route path="/Packages" element = {<Packages/>} />
      {/* <Route path="/AdminHome" element={<AdminHome/>}/> */}
      <Route path="/AdminHome" element={<ProtectedRoutes ComponentName = {AdminHome} />}/>
      <Route path="/TourPackage" element={<ViewSinglePackage/>}/>
      <Route path="/UserList" element={<ProtectedRoutes ComponentName={UserQuery} />}/>
      <Route path ="/ManagePackage" element={<ProtectedRoutes ComponentName={AddDelPackages} />}/>
      {/* <Route path = "/addPackage" element= {<ProtectedRoutes ComponentName={AddPackage} />}/> */}
      <Route path = "/addPackage" element= {<AddPackage/>}/>
    </Routes>
   
    </BrowserRouter>
    </Provider>
    
   
    </>
  );
}

export default App;
