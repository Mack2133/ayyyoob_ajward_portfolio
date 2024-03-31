import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import AnimatedCursor from "react-animated-cursor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <AnimatedCursor
    color="255, 255, 255"
    innerSize={8}
    outerSize={35}
    innerScale={1}
    outerScale={1.7}
    outerAlpha={0}
    outerStyle={{
      border: '3px solid var(--cursor-color)'
    }}
    innerStyle={{
      backgroundColor: 'var(--cursor-color)'
    }} */}
    {/* /> */}
  </React.StrictMode>
);
