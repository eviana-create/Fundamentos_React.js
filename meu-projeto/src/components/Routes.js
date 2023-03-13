import React from "react";
import { Route, BrowserRouter } from 'react-router-dom';

import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/contato";

  const Routes = () => {
    return (
      <BrowserRouter>
        <Route componente = {Home} path="/" exact />
        <Route componente = {Empresa} path="/Empresa" exact />
        <Route componente = {Contato} path="/contato" exact />
      </BrowserRouter>
    )
  }

  export default Routes
