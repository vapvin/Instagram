import React from 'react';
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
    width:390px;
    padding: 30px 40px 50px;
    border:1px solid #dbdbdb;
    background: #fff;
    h1{margin-bottom:10px;}
    p{margin-bottom:20px; text-align:center; line-height: 18px;}
    .txt{
        font-size: 17px;
        font-weight: 600;
        line-height: 20px;
        color:#777;
        text-align:center;
        margin-bottom:20px;
    }
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


const SendLoginLink = styled.button`
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

const NewAccountLink = styled(Link)`
    width:100%;
    text-align:center;
    display: block;
    margin-top: 20px;
    font-weight:bold;
`;

const BackLogin = styled(Link)`
    width:390px;
    line-height:40px;
    text-align:center;
    font-weight:bold;
    background-color: #eee;
    border: 1px solid #dbdbdb;
    margin-top:-1px;
`;



function FindPassword(){
    return(      
       
        <JoinContainer>
            <InputnArea>
                <h1>
                    <Link to="#">
                        <img src="./img/logo.png" alt=""/>
                    </Link>
                </h1>
                <p className="txt">로그인에 문제가 있나요?</p>
                <p>이메일 주소, 전화번호 또는 사용자 이름을 입력하시면 계정에 다시 액세스할 수 있는 링크를 보내드립니다.</p>
                <form action="">
                    <Input type="text" placeholder="이메일 주소" />   
                    <SendLoginLink type="submit">로그인 링크 보내기</SendLoginLink>  
                </form>
                <OrContainer>또는</OrContainer>
                <NewAccountLink>새 계정 만들기</NewAccountLink>
            </InputnArea>
            <BackLogin>로그인으로 돌아가기</BackLogin>
            
        </JoinContainer>
         
    );

}

export default FindPassword;