import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./AppContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider speed={0} start={0} end={0}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>
);
