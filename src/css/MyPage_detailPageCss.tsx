import { createGlobalStyle } from "styled-components";

const ClothesDetailCss=createGlobalStyle`
    .detailContainer{
        width:100%;
        height:auto;
        display:flex;
        box-sizing:border-box;
    }

    .dataContainer{
        width:100%;
        display:flex;
    }
    .dataimage{
        width:50%;
    }
    .datadescri{
        width:50%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        box-sizing:border-box;
        margin-left:1vw;
    }
    .chartContainer{
        width:100%;
       
    }
`;

export default ClothesDetailCss;
