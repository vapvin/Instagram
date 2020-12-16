import React from 'react';
import JoinInput from '../components/JoinInput';

function Join(){
    return(
        <section>
            <h1>
                <a href="#">INSTAGRAM</a>
            </h1>
            <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
            <JoinInput />
            <div>
                <p>계정이 있으신가요? <a href="#">로그인</a></p>
            </div>
        </section>
    );

}

export default Join;