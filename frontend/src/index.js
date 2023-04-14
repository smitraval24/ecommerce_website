import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/login";

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  // <div>hello smit raval is here</div>
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  </Router>
  </React.StrictMode>
);