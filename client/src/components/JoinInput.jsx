import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
        background-color:#fff;
        border:1px solid #f6f6f6;
        p{color:#ccc;}
    }
    &:last-child{
        background-color:#ccc;
        p{color:#fff;}
    }
    img{width:20px; display:inline-block; vertical-align:middle;}
    >p{display:inline-block; vertical-align:middle; margin-left:10px;}
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


const JoinLink = styled(Link)`
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

function Join(){
    return(
        <>
            <LoginContainer>
                <LoginLink href="#">
                    <img src="./img/kakao.png" alt=""/>
                    <p>카카오로그인</p>
                </LoginLink>
                <LoginLink href="#">
                <img src="./img/kakao.png" alt=""/>
                    <p>구글로그인</p>
                </LoginLink>
                <LoginLink href="#">
                <img src="./img/kakao.png" alt=""/>
                    <p>깃허브로그인</p>
                </LoginLink>
            </LoginContainer>
            <OrContainer>또는</OrContainer>
            <form action="#">
                <Input type="email" placeholder="이메일 주소" />
                <Input type="text" placeholder="성명" />
                <Input type="password" placeholder="비밀번호" />
                <Input type="password" placeholder="비밀번호 확인" />
                <JoinLink href="#">가입</JoinLink>
            </form>
        </>
    );
}

export default Join;