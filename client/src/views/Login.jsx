import React from 'react';
import JoinInput from '../components/JoinInput';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:50px 0;
`;

const PhoneContainer = styled.section`
    width:450px;
`;

const InputnContainer = styled.section`
    width:350px;
    border:1px solid rgba(var(--b6a,219,219,219),1);
    background: #fff;
`;




function Login(){
    return(      
        <LoginContainer>
            <PhoneContainer>
                <img src="./img/join_phone.png" alt=""/>
            </PhoneContainer>
            <InputnContainer>
                <h1>
                    <Link href="#">
                        <img src="./img/logo.png" alt=""/>
                    </Link>
                </h1>
                <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
                <JoinInput />
                <div>
                    <p>계정이 있으신가요? <Link href="#">로그인</Link></p>
                </div>
            </InputnContainer>
        </LoginContainer>
    );

}

export default Login;