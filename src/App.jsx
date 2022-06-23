import {
  BrowserRouter as Router,
Routes,
  Route,
} from "react-router-dom";
import './index.css'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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
import SeeAllResidencesScreen from "./Screens/dashboard/SeeAllResidencesScreen";
import AdminModifyResidence from "./Screens/dashboard/AdminModifyResidence";
// importation de NavContext
import { RecoilRoot } from "recoil";
function App() {

  return ( 
<RecoilRoot>
      <ToastContainer />
    <Router>
  <Routes>
    <Route  path="/login"  element={ <LoginScreen/>} />
    <Route  path="/signup"  element={ <SignupScreen/>} />
    <Route  path="/"  element={ <HomeScreen/>} />
    <Route  path="/residence/:IdResidence"  element={ <OneResidence/>} />
    <Route  path="/residences"  element={ <ResidenceScreen/>} />
    <Route  path="/admin/residences"  element={ <SeeAllResidencesScreen/>} />
    <Route  path="/admin/residences/modify/:IdResidence"  element={ <AdminModifyResidence/>} />
   
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
  </RecoilRoot>
  )
}

export default App
