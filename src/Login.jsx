import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

import { Link } from 'react-router-dom';

const User = {
  email: 'test@example.com',
  pw: 'test2323@@@'  
} //저장되어있는회원목록

export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false); 
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true); //이메일, 비밀번호로 버튼 활성화

    const handleEmail = (e) => {
      setEmail(e.target.value)
      const regex = 
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i; //이메일 주소 검증 정규 표현식
      if(regex.test(email)){
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    }

    const handlePassword = (e) => {
      setPw(e.target.value);
      const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/; //비밀번호 정규 표현식
      if(regex.test(pw)) {
        setPwValid(true);
      } else{
        setPwValid(false);
      }
    }

    const onClickConfirmButtton = () => {
      if(email === User.email && pw === User.pw) {
        alert('로그인에 성공했습니다.');
      } else {
        alert('등록되지 않은 회원입니다.')
      } 
    }

    useEffect(() => {
      if(emailValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    },[emailValid, pwValid]); //emailValid와 pwValid 값이 변화가 있을 때 안에 값이 실행(버튼활성화)

    return(
        <div className="page">
          <div className="titleWrap">
            이메일과 비밀번호를
            <br/>
            입력해주세요
          </div>
          
          <div className="contentWrap">
            <div className="inputTitle">이메일 주소</div>
            <div className="inputWrap">
              <form>
                <input 
                  type='text'
                  name='email'
                  className="input"
                  placeholder="text@gmail.com"
                  value={email}  //사용자가 입력한 이메일 주소 값
                  onChange={handleEmail} />
              </form>
            </div>
            <div className="errorMessageWrap">
              {!emailValid && email.length > 0 && (
                  <div>올바른 이메일을 입력해주세요.</div>
                )}
            </div>

            <div style={{marginTop: "26px"}} className="inputTitle">
              비밀번호
              </div>
            <div className="inputWrap">
              <form>
                <input 
                  type='password'
                  name='pw'
                  className="input"
                  placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                  value={pw}   //사용자가 입력한 패스워드 값
                  onChange={handlePassword}
                  />
              </form>
            </div>
            <div className="errorMessageWrap">
              {!pwValid && pw.length > 0 && (
                  <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요</div>
              )}
            </div>
            <div className="passwordChange">비밀번호 변경</div>
          </div>

          <div className="post-submit-wrapper">
            <button onClick={onClickConfirmButtton} disabled={notAllow} className="bottomButton">
                <Link to="/">확인</Link>
              </button>
          </div>
        </div>
    );
}
