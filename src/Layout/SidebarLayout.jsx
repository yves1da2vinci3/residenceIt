import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import userAtom from "../recoil/Atoms/userAtom"
import DashboardSideBar from "../Screens/dashboard/DashboardSideBar";
import { useRecoilValue } from "recoil";

const SidebarLayout = () => {
  const User= useRecoilValue(userAtom)

  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(()=>{
    if(Object.keys(User).length > 0) {
      if (pathname.startsWith("/admin")) {
        if (!User?.isAdmin) {
          navigate("/user");
        }
      }
    }

  
  },[])



  return (
    <div className="flex h-auto ">
      <div className="flex-1">
        <DashboardSideBar />
      </div>
      <div className="flex-[3] px-8 h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
