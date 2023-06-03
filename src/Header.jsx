import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header1">
      <div className="logo">
        <h2>
          <Link to="/" style={{marginLeft:"120px"}}>웹 메이커스</Link>
        </h2>
      </div>
      <Link to="/login" style={{marginRight:"10px"}}>로그인</Link>
      <Link to="/signup" style={{marginRight:"10px"}}>회원가입</Link>
      <Link to="/profilemodify">프로필</Link>
      </div>
  );
};

export default Header;