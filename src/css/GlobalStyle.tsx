import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
  
   font-family: 'EliceDigitalBaeum';
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    margin: 0;
    max-width: 100%;
    -ms-overflow-style: none;
    
@font-face {
    font-family: 'EliceDigitalBaeum';
    font-weight: 400;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/elice/EliceDigitalBaeumRegular.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/elice/EliceDigitalBaeumRegular.eot?#iefix') format('embedded-opentype'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/elice/EliceDigitalBaeumRegular.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/elice/EliceDigitalBaeumRegular.woff') format('woff'),
         url('https://cdn.jsdelivr.net/gh/webfontworld/elice/EliceDigitalBaeumRegular.ttf') format("truetype");
    font-display: swap;
} 
    
}
}
}
   
} 
    
 }
 ::-webkit-scrollbar { display: none;


  }
  a {
    text-decoration: none;
    transition: color 0.3s ease-in;
    color: ${({ theme }) => theme.textColor};
    &:hover {
      color: #FED501;
    }
  }
`;

export default GlobalStyle;
