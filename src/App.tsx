import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Book,Header } from "./pages";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
