import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {RecoilRoot} from "recoil";
import {ThemeProvider} from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import {theme} from "./theme";
import 'bootstrap/dist/css/bootstrap.min.css';


const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);