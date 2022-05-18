import {
  BrowserRouter as Router,
Routes,
  Route,
} from "react-router-dom";
import './index.css'
import {ToastContainer} from 'react-toastify'


// importation des screens
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";
import OneResidence from "./Screens/OneResidenceScreen";
import UserScreen from "./Screens/userSpace/UserScreen";
import ProfileScreen from "./Screens/userSpace/ProfileScreen";
import ResidenceScreen from "./Screens/ResidenceScreen";
import CreateResidence from "./Screens/dashboard/CreateResidence";
import SidebarLayout from "./Layout/SidebarLayout";
import RequestUserTable from './Screens/dashboard/RequestUserTable'
import AdminUserScreen from "./Screens/dashboard/UserScreen";
import BreakdownScreen from "./Screens/dashboard/BreakdownScreen";
// importation de NavContext
import NavContext from "./context/NavContext";
import AuthContext from "./context/AuthContext";
import SignupContext from "./context/SignupContext";
import ModalContext from "./context/ModalContext";

function App() {

  return ( 
    <ModalContext>
     
    <SignupContext>
    <AuthContext>
    <NavContext>
      <ToastContainer />
    <Router>
  <Routes>
    <Route  path="/login"  element={ <LoginScreen/>} />
    <Route  path="/signup"  element={ <SignupScreen/>} />
    <Route  path="/"  element={ <HomeScreen/>} />
    <Route  path="/residence/:IdResidence"  element={ <OneResidence/>} />
    <Route  path="/residences"  element={ <ResidenceScreen/>} />
   
    <Route   element={<SidebarLayout />}>
      <Route path="/admin/request"  element={ <RequestUserTable /> } />
      <Route path="/admin/users"  element={ <AdminUserScreen /> } />
      <Route path="/admin/breakdown"  element={ <BreakdownScreen /> } />
          {/* <Route path="/admin/warning" /> */}
    </Route>
    <Route  path="/admin/create"  element={ <CreateResidence/>} />
    <Route  path="/user"  element={ <UserScreen/>} />
    <Route  path="/user/profile"  element={ <ProfileScreen/>} />

  </Routes>
  </Router>
  </NavContext>
  </AuthContext>
  </SignupContext>
  </ModalContext>

  )
}

export default App
