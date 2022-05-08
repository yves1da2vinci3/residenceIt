import {
  BrowserRouter as Router,
Routes,
  Route,
} from "react-router-dom";
import './index.css'
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
// importation de NavContext
import NavContext from "./context/NavContext";
function App() {

  return (
    <NavContext>
    <Router>
  <Routes>
    <Route  path="/login"  element={ <LoginScreen/>} />
    <Route  path="/signup"  element={ <SignupScreen/>} />
    <Route  path="/"  element={ <HomeScreen/>} />
    <Route  path="/residences"  element={ <ResidenceScreen/>} />
    <Route  path="/residence/:IdResidence"  element={ <OneResidence/>} />
    <Route   element={<SidebarLayout />}>
      <Route path="/admin/request"  element={ <RequestUserTable /> } />
      {/* <Route path="/admin/warning" /> */}
    </Route>
    <Route  path="/admin/create"  element={ <CreateResidence/>} />
    <Route  path="/user"  element={ <UserScreen/>} />
    <Route  path="/user/profile"  element={ <ProfileScreen/>} />

  </Routes>
  </Router>
  </NavContext>
  )
}

export default App
