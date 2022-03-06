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
        padding:1em 1em 1em 0;
        width:200px;
        height:auto;
        background-color:white;
        border:1px solid #f7f7f7;
        border-radius:0 10px 10px 0;
    }

    .membermenu{
        margin-top:.5vw;
    }

    .ceomenu{
        
        margin-top:.5vw;
    }

    .adminmenu{
        
        margin-top:.5vw;
    }
`;

export default MyPage_SideMenubarCss;