import { Routes, Route } from "react-router-dom";
import Topnav from "./Topnav";
import Home from "./pages/home";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Topnav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
