import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProviderParallax } from "./AppContextParallax";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./AppContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <AppProviderParallax speed={0} start={0} end={0}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProviderParallax>
  </AppProvider>
);
