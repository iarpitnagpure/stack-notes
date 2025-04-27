import React from "react";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BrowserRouter>
    <App />
</BrowserRouter>
);
