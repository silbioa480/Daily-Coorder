import {createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';


const MemInfoCss=createGlobalStyle`
    .memberContainer{
        width:40vw;
        height:auto;
        padding:2vw;
        margin:5em auto;
        border:1px solid black;
        background-color:white;
        
    }
    body{
        background-color:#f7f7f7;
    }
`;



export default MemInfoCss;