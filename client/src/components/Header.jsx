import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderWrap = styled.header`
    width: 100%;
    height: 54px;
    background: #fff;
    border-bottom: 1px solid #ddd;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
`;

const Nav = styled.nav`
    max-width: 975px;
    height: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    h1 {
        width: 30%;
        height: 100%;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        a {
            width: 100%;
            display: flex;
            justify-content: flex-start;
        }
        img {
            width: 103px;
        }
    }
    div {
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        input {
            width: 215px;
            height: 28px;
            background: #fafafa;
            outline: none;
            border: 1px solid #ddd;
            border-radius: 2px;
            padding: 2px 5px;
        }
    }
    ul {
       width: 30%;
       display: flex;
       justify-content: flex-end;

       li {
           margin-left: 22px;
           display: flex;
           align-items: center;
           justify-content: center;
       }
    }
`;



function Header(){
    return(
        <HeaderWrap>
            <Nav>
                <h1>
                    <Link to="">
                        <img src="./img/logo.png" alt=""/>
                    </Link>
                </h1>
                <div>
                    <input type="text" placeholder="검색" />   
                </div>
                <ul>
                    <li>
                        <Link to="/">home</Link>    
                    </li>
                    <li>
                        <Link to="/">dm</Link>    
                    </li>
                    <li>
                        <Link to="/">video</Link>    
                    </li>
                    <li>
                        <Link to="/">like list</Link>    
                    </li>
                    <li>
                        <Link to="/">profile</Link>    
                    </li>
                </ul>
            </Nav>
        </HeaderWrap>
    );

}

export default Header;