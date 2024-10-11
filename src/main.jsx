import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Web3ModalProvider } from "./utils/Web3ModalProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Web3ModalProvider>
      <App />
    </Web3ModalProvider>
  </StrictMode>
);
