import React from 'react';
import JoinInput from '../components/JoinInput';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const JoinContainer = styled.div`
    width:100%;
    height: 100vh;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;

const InputnArea = styled.section`
    width:350px;
    padding: 30px 40px 50px;
    border:1px solid #dbdbdb;
    background: #fff;
    .txt{
        font-size: 17px;
        font-weight: 600;
        line-height: 20px;
        color:#777;
        text-align:center;
        margin-bottom:20px;
    }
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


function Join(){
    return(      
       
        <JoinContainer>
            <InputnArea>
                <h1>
                    <Link to="#">
                        <img src="./img/logo.png" alt=""/>
                    </Link>
                </h1>
                <p className="txt">친구들의 사진과 동영상을 보려면<br /> 가입하세요.</p>
                <JoinInput />
            </InputnArea>
            <LoginArea>
                <p>계정이 있으신가요? <ButtonLogin to="/login">로그인</ButtonLogin></p>
            </LoginArea>
        </JoinContainer>
         
    );

}

export default Join;