import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LoginWrap = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:50px 0;
`;

const PhoneContainer = styled.section`
    width:450px;
`;

const InputnArea = styled.section`
    width:350px;
    padding: 30px 40px 50px;
    border:1px solid #dbdbdb;
    background: #fff;
    h1{margin-bottom:30px;}
`;

const Input = styled.input`
    border:1px solid #dbdbdb;
    margin-bottom: 5px;
    width: 100%;
    height: 36px;
    background-color: #fafafa;
    padding: 9px 0 7px 8px;
    color: #8e8e8e;
`;

const LoginArea = styled.section`
    width: 350px;
    height: 70px;
    margin-top:10px;
    padding: 26px 0;
    text-align: center;
    border: 1px solid #dbdbdb;
    background-color:#fff;
`;

const ButtonLogin = styled(Link)`
    color:#0095f6;
`;

const JoinLink = styled.button`
    background-color:#0095f6;
    color:#fff;
    text-align:center;
    display:block;
    font-size:14px;
    font-weight:bold;
    color:#fff;
    border-radius: 4px;
    line-height:33px;
    margin-top:10px;
    width: 100%;
    outline: none;
    border: none;
`;

const OrContainer = styled.div`
    position:relative; 
    font-size: 13px;
    font-weight: 600;
    text-align:center;
    color:#dbdbdb;
    margin: 15px 0;
    &:before{content:''; width:100px; height:2px; border-top:1px solid #dbdbdb; position:absolute; top:50%; left:0;}
    &:after{content:''; width:100px; height:2px; border-top:1px solid #dbdbdb; position:absolute; top:50%; right:0;}
`;

const LoginContainer = styled.div`
    LoginLink{width:100%;}
`;

const LoginLink = styled(Link)`
    width:100%;
    display:block;
    border: 1px solid transparent;
    border-radius: 4px;
    line-height:30px;
    color:#fff;
    text-align:center;
    font-weight:bold;
    margin-bottom:5px;
    &::placeholder{font-size:13px;}
    &:first-child{
        background-color:rgba(255,238,51,0.99);
    }
    &:nth-child(2){
        background-color:#d85147;
        border:1px solid #f6f6f6;
        p{color:#fff;}
    }
    &:last-child{
        background-color:#24292e;
        p{color:#fff;}
    }
    img{width:20px; display:inline-block; vertical-align:middle;}
    >p{display:inline-block; vertical-align:middle; margin-left:10px;}
`; 
const FindPasswordLink = styled(Link)`
    width:100%;
    text-align:center;
    display: block;
    font-size: 11px;
    margin-top: 20px;
`;

function Login(){
    return(      
        <LoginWrap>
            <PhoneContainer>
                <img src="./img/join_phone.png" alt=""/>
            </PhoneContainer>
            <div>
                <InputnArea>
                    <h1>
                        <Link to="#">
                            <img src="./img/logo.png" alt=""/>
                        </Link>
                    </h1>
                    <form>
                        <Input name="email" type="email" placeholder="이메일 주소"  />
                        <Input name="password" type="password" placeholder="비밀번호"/>
                        <JoinLink type="submit">로그인</JoinLink>
                    </form>
                    <OrContainer>또는</OrContainer>
                    <LoginContainer>
                        <LoginLink to="#">
                            <img src="./img/kakao.png" alt=""/>
                            <p>카카오로그인</p>
                        </LoginLink>
                        <LoginLink to="#">
                        <img src="./img/google.png" alt=""/>
                            <p>구글로그인</p>
                        </LoginLink>
                        <LoginLink to="#">
                        <img src="./img/github.svg" alt=""/>
                            <p>깃허브로그인</p>
                        </LoginLink>
                    </LoginContainer>
                    <FindPasswordLink>비밀번호를 잊으셨나요?</FindPasswordLink>
                </InputnArea>
                <LoginArea>
                    <p>계정이 없으신가요? <ButtonLogin to="/join">가입하기</ButtonLogin></p>
                </LoginArea>
            </div>
        </LoginWrap>
    );

}

export default Login;