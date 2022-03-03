import { createGlobalStyle } from "styled-components";

const AdApplicationCss=createGlobalStyle`
   
     .AdContainer{
        width:100%;
        height:auto;
        padding:1vh 1vw;
        border:1px solid black;
        
    }
    .TitleSpace{
        width:100%;
        display:flex;
        flex-direction:column;
        margin:1vh 0;
    }
    Image{
        width:100%;
        height:200px;
        background-color:blue;
    }
    .AdImg{
        width:50%;
        height:300px;
        background-color:green;
        margin:1vh 0;
        display:flex;
        flex-direction:column;
        justify-content:flex-start;
    }
    .TagSpace{
        margin:1vh 0;
    }
    .Adurl{
        margin:1vh 0;
    }
    .buttonspace{
        margin:1vh 0;
        display:flex;
        justify-content:center;
    }
`;

export default AdApplicationCss;