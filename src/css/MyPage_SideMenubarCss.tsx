import {createGlobalStyle } from "styled-components";

const MyPage_SideMenubarCss=createGlobalStyle`
    *{
        margin:0;
        padding:0;
       
    }

    .sdBar{
        
        position:fixed;
        top:50%;
        transform:translateY(-50%);
        left:0;
        padding:1em;
        width:200px;
        height:auto;
        background-color:yellow;
    }
`;

export default MyPage_SideMenubarCss;