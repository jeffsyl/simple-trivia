import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TriviaProvider } from "./context/trivia-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TriviaProvider>
      <App />
    </TriviaProvider>
  </StrictMode>,
);
