import {createGlobalStyle } from "styled-components";

const MemInfoCss=createGlobalStyle`
    .memberContainer{
        width:40vw;
        height:auto;
        padding:2vw;
        position:absolute;
        top:50%; left:50%;
        transform:translate(-50%,-50%);
        background-color:green;
    }
`;



export default MemInfoCss;