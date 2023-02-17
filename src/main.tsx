import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./AppContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <App />
  </AppProvider>
);
