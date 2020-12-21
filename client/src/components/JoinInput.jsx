import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {gql, useMutation} from '@apollo/client';

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

const Input = styled.input`
    border:1px solid #dbdbdb;
    margin-bottom: 5px;
    width: 100%;
    height: 36px;
    background-color: #fafafa;
    padding: 9px 0 7px 8px;
    color: #8e8e8e;
`;

const TextError = styled.p`
    font-size: 11px;
    color: #ff0000;
    margin-bottom:15px;
`;

const REGISTER_USER = gql`
    mutation register($email: String! $username: String! $password: String! $confirmPassword: String!){
        register(email: $email username: $username password: $password confirmPassword: $confirmPassword)
    }
`;

function Join(){

    const [variables, setVariables] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "" 
    });
    const [error, setError] = useState("");

    const getInputData = e =>{
        const {name, value} = e.target;
        setVariables({
            ...variables,
            [name]: value
        });
    }
   
    const [registerUser, {loading}] = useMutation(REGISTER_USER, {
        update(_, res){
            console.log(res)
        },
        onError(err){
            console.log(err.message)
            setError(err.message)
        }
    })


    const checkForm = () =>{
        if(variables.password !== variables.confirmPassword){
            setError("password가 일치하지 않습니다 다시 입력해주세요");
            return false;
        }else if(variables.password.length < 8 || variables.password.length > 15){
            setError("비밀번호는 8자 이상 15자 이하로 입력해주세요");
            return false;
        }else if(!variables.password.match(/([a-zA-Z0-9].[!,@,#,$,%,^,&,*,?,~])|([!,@,#,$,%,^,&,*,?,~].*[a-zA-Z0-9])/)){
            setError("특수문자를 하나 이상 입력해주세요");
            return false;
        }else{
            return true;
        }
    } 
    
    const registerSubmit = e =>{
        e.preventDefault();
        const validate = checkForm();
        if(!validate){
            console.log(error);
            return false;
        }else{
            registerUser({variables})
            setVariables({
                email: "",
                username: "",
                password: "",
                confirmPassword: ""
            })
        }
    }

    return(
        <>
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
            <OrContainer>또는</OrContainer>
            <form onSubmit={registerSubmit}>
                <Input name="email" type="email" placeholder="이메일 주소" value={variables.email}  onChange={getInputData}/>
                <Input name="username" type="text" placeholder="성명" value={variables.username} onChange={getInputData}/>
                <Input name="password" type="password" placeholder="비밀번호" value={variables.password} onChange={getInputData}/>
                <Input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={variables.confirmPassword} onChange={getInputData}/>
                {
                    error.length > 0 ? <TextError>{error}</TextError> : null
                }
                <JoinLink type="submit">가입</JoinLink>
            </form>
        </>
    );
}

export default Join;