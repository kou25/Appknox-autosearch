import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StateProvider } from "./provider/StateProvide.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StateProvider>
    <App />
  </StateProvider>
);
