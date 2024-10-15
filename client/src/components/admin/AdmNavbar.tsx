import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authentication/authSlice";
import { RootState } from "../../store";
import { AdmDropdown } from "./AdmDropdown";

export const AdmNavbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bakeryPict = useSelector(
    (state: RootState) => state.userProfile.profile.profilePict
  );

  const { isLogin } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  console.log(bakeryPict);
  return (
    <>
      {/* top nav */}
      <div
        id="nav"
        className="flex flex-row justify-between bg-yellow-400 px-4 py-2 align-baseline h-16 shadow-lg mb-2"
      >
        {/* logo */}
        <div className="flex items-center justify-center h-[100%]">
          <img className="h-[100%] bg-cover" src="../assets/logo.png" alt="" />
        </div>

        {/* right nav */}
        <div className="flex items-center justify-center h-[100%] gap-2">
          {isLogin ? (
            <>
              <Icon icon="solar:cart-3-linear" className="w-8 h-8" />

              <AdmDropdown
                handleLogout={handleLogout}
                bakeryPict={bakeryPict}
              />
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/auth")}
                className="bg-gray-800 px-4 py-2 hover:bg-gray-900 rounded-lg"
              >
                <p className="text-white text-sm font-bold">LOGIN / SIGN UP</p>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
