import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {useMutation, gql} from '@apollo/client';

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

const JoinButton = styled.button`
    outline: none;
    border: none;
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

const REGISTER_USER = gql`
    mutation register($email: String! $username: String! $password: String! $confirmPassword: String!){
        register(email: $email username: $username password: $password confirmPassword: $confirmPassword)
    }
`;

function Join(){

    const [userdata, setUserData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const getUserValue = e => {
        const {name, value} = e.target;
        setUserData({
            ...userdata,
            [name]: value,
        })
    }

    const [registerUser, {loading}] = useMutation(REGISTER_USER, {
        update(_, res){
            console.log(res);
        },
        onError(err){
            console.log(err);
        }
    });
    
    const registerForm = e => {
        e.preventDefault();
        registerUser({userdata});
    }

    
    return(
        <>
            <LoginContainer>
                <LoginLink to="#">
                    <img src="./img/kakao.png" alt=""/>
                    <p>카카오로그인</p>
                </LoginLink>
                <LoginLink to="#">
                <img src="./img/kakao.png" alt=""/>
                    <p>구글로그인</p>
                </LoginLink>
                <LoginLink to="#">
                <img src="./img/kakao.png" alt=""/>
                    <p>깃허브로그인</p>
                </LoginLink>
            </LoginContainer>
            <OrContainer>또는</OrContainer>
            <form action="#" onSubmit={registerForm}>
                <Input name="email" type="email" placeholder="이메일 주소" value={userdata.email} onChange={getUserValue} />
                <Input name="username" type="text" placeholder="성명" value={userdata.username} onChange={getUserValue} />
                <Input name="password" type="password" placeholder="비밀번호" value={userdata.password} onChange={getUserValue} />
                <Input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={userdata.confirmPassword} onChange={getUserValue} />
                <JoinButton type="submit" >가입</JoinButton>
            </form>
        </>
    );
}

export default Join;