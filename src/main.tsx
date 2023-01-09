import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import JoinPage from "./pages/JoinPage";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/join" element={<JoinPage />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
