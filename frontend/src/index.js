import React from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "./css/custom.css";
import "./css/grid-min.css";
import "./css/normalize.css";
import "./css/pure-min.css";
import "react-toastify/dist/ReactToastify.min.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
        {/* Toast support for forms */}
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
    </React.StrictMode>
);
