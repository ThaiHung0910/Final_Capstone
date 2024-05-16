import { message } from 'antd';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheckUser = ({children}) => {
    
    const navigate = useNavigate();
    const { infoUser } = useSelector((state) => state.userReducer);
  
    useEffect(() => {
      if (!infoUser) {
        message.error("Vui lòng đăng nhập để tiếp tục");
        navigate("/auth/login");
      }
    }, [infoUser]);

  return (
    <>{children}</>
  )
}

export default CheckUser