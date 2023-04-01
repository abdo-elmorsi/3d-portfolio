import React from "react";
import ReactDOM from "react-dom/client";
import AnimatedCursor from "react-animated-cursor";

import App from "./App";
import "./index.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <AnimatedCursor
      className="Cursor"
      innerSize={20}
      outerSize={15}
      color="333, 333, 333"
      outerAlpha={0.8}
      innerScale={0.1}
      outerScale={4}
      outerStyle={{
        zIndex: "100000",
      }}
      clickables={["a", "button", ".link"]}
    />
    <App />
  </React.StrictMode>
);
