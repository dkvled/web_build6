import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {

  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [birthValid, setBirthValid] = useState(false);
  const [telValid, setTelValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleName = (e) => {
    setName(e.target.value);
  }


  const handleBirth = (e) => {
    setBirth(e.target.value)
    const regex = 
    /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/; //이메일 주소 검증 정규 표현식
    if(regex.test(birth)){
      setBirthValid(true);
    } else {
      setBirthValid(false);
    }
  }

  const handleTel = (e) => {
    setTel(e.target.value)
    const regex = 
    /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if(regex.test(tel)){
      setTelValid(true);
    } else {
      setTelValid(false);
    }
  }

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

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =  /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
    if(regex.test(pw)) {
      setPwValid(true);
    } else{
      setPwValid(false);
    }
  }

  useEffect(() => {
    if(birthValid && telValid && emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  },[birthValid, telValid, emailValid, pwValid]);

  return(
    <div className="page">
      <div className="titleWrap">
        회원가입
      </div>

      <div className="contentWrap">

        <div className="inputTitle">이름</div>
        <div className="inputWrap">
          <form>
            <input 
            type='text'
            name='name'
            className="input"
            maxLength='20'
            value={name}
            onChange={handleName} />
          </form>
        </div>

        <div style={{marginTop: "32px"}} className="inputTitle">생년월일</div>
        <div className="inputWrap">
          <form>
            <input
            type='text'
            name='birth'
            className="input"
            placeholder="ex: 20030717"
            value={birth}
            onChange={handleBirth} />
          </form>
        </div>

        <div style={{marginTop: "20px"}} className="inputTitle">전화번호</div>
        <div className="inputWrap">
          <form>
            <input
            type='text'
            name='tel'
            className="input"
            placeholder='ex: 01012345678'
            value={tel}
            onChange={handleTel} />
          </form>
        </div>

        <div style={{marginTop: "20px"}} className="inputTitle">이메일</div>
        <div className="inputWrap">
          <form>
            <input
            type='text'
            name='email'
            className="input"
            placeholder="text@gmail.com"
            value={email}
            onChange={handleEmail} />
          </form>
        </div>

        <div style={{marginTop: "20px"}} className="inputTitle">비밀번호</div>
        <div className="inputWrap">
          <form>
            <input
            type='password'
            name='pw'
            className="input"
            placeholder="9자 이상 입력"
            value={pw}
            onChange={handlePw} />
          </form>
        </div>
        
      </div>
      <div className='button'>
        <button disabled={notAllow} className="bottomButton"> 
          <Link to="/">회원가입 하기</Link>          
        </button>
      </div>
   </div>
  );
}
