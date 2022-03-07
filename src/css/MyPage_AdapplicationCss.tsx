import { createGlobalStyle } from "styled-components";

const AdApplicationCss=createGlobalStyle`
   
     .AdContainer{
        width:100%;
        height:auto;
        margin-left:1.4vw;
        padding:3vw;
        border:1px solid #dbdbdb;
        border-radius:20px;
        
    }
    .TitleSpace{
        width:100%;
        display:flex;
        flex-direction:column;
        margin:2vw 0;
    }
    .AdImg{
        width:50%;
        height:300px;
        margin:2vw 0;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
    }
    .TagSpace{
        margin:2vw 0;
    }
    .Adurl{
        margin:2vw 0;
    }
    .buttonspace{
        margin-top:3vw;
        display:flex;
        justify-content:center;
    }
    .Addescription{
        width:100%;
        margin-top:3vh;
        display:flex;
        flex-direction:column;
    }

    .innertag{
        width:100px;
        margin-top: 5px;
        background: #ffeee7;
        border-radius: 56px;
        padding: 8px 12px;
        color: #ff6e35;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 1rem;
        line-height: 20px;
        text-align:center;
        margin-right: 5px;
        cursor: pointer;
    }
`;

export default AdApplicationCss;