import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";

// Importing the Bootstrap CSS

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
