import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./routes";

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <Routes />
    </React.StrictMode>
)