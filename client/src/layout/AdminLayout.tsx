import { useEffect } from "react";
import { AdmNavbar } from "../components/admin/AdmNavbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const AdminLayout = () => {
  const navigate = useNavigate();

  const { isLogin } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!isLogin) {
      navigate("/landing-page");
    }
  }, [isLogin, navigate]);
  return (
    <>
      <AdmNavbar />
      <div className="flex flex-col items-center">
        <Outlet />
      </div>
    </>
  );
};
