import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contractors from "./pages/Contractors";
import Services from "./pages/Services"; // ✅ new page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Contractors Page */}
        <Route path="/contractors" element={<Contractors />} />

        {/* Services Page */}
        <Route path="/services" element={<Services />} />

        {/* Optional: 404 Page (future use) */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;