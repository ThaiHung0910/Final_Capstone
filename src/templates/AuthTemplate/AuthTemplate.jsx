import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const AuthTemplate = () => {
  const { infoUser } = useSelector((state) => state.userReducer),
    navigate = useNavigate();

  useEffect(() => {
    if (infoUser) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex w-screen h-screen">
      <div className="w-full flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthTemplate;
