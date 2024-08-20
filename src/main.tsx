import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { setupStore } from "./store/store.ts";
const store = setupStore();
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter basename="/github-test-task">
      <App />
    </BrowserRouter>
  </Provider>
);
