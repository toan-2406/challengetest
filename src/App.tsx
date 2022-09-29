import React, { useState, useEffect } from "react";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import theme from "./styles/theme";
import Home from "./pages/Home";
import CoinDetail from "./pages/CoinDetail";
import NotFound from "./pages/NotFound";

import Container from "@mui/material/Container";

const slug = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/coin/:id",
    component: <CoinDetail />,
  },

  {
    path: "*",
    component: <NotFound />,
  },
];
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <BrowserRouter>
        <Routes>
          {slug.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                element={<Container maxWidth="md">{item.component}</Container>}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
