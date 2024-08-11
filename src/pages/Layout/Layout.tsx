import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-mainBg">
      <Outlet />
    </div>
  );
};

export default Layout;
