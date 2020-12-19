import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{box-sizing:border-box;}
    a,button{text-decoration:none; color:inherit; outline:none; cursor:pointer;}
    h1,h2,h3,h4,h5,p{margin:0; padding:0;}
    body{width:100%; height:100vh; font-size:14px; background-color:rgba(var(--b3f,250,250,250),1); overflow-wrap: break-word;}
    #root{width:100%; height:100%;}
    h1{
        a{
            display:block; width:175px; margin:0 auto;
            img{width:100%;}
        }
    }
`;

export default GlobalStyles;