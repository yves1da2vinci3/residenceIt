import { Outlet } from "react-router-dom";

import DashboardSideBar from "../Screens/dashboard/DashboardSideBar";

const SidebarLayout = () => {
//   const me = useMeStoreValue();
//   const navigate = useNavigate();
//   const { pathname } = useLocation();

//   if (pathname.startsWith("/admin")) {
//     if (!me?.roles.includes(6)) {
//       navigate("/incomes");
//     }
//   }


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
