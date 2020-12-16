import React from 'react';

function Join(){
    return(
        <>
            <div>
                <a href="#">카카오로그인</a>
                <a href="#">구글로그인</a>
                <a href="#">깃허브로그인</a>
            </div>
            <form action="#">
                <input type="email" placeholder="이메일 주소" />
                <input type="text" placeholder="성명" />
                <input type="password" placeholder="비밀번호" />
                <input type="password" placeholder="비밀번호 확인" />
                <a href="#">가입하기</a>
            </form>
        </>
    );
}

export default Join;