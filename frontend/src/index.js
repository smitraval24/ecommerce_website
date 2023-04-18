import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from "./app";

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  // <div>hello smit raval is here</div>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);