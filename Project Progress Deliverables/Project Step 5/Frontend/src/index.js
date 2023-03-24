import React from "react";
import { createRoot } from "react-dom/client";
import "./css/custom.css";
import "./css/grid-min.css";
import "./css/normalize.css";
import "./css/pure-min.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
