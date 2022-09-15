import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppDrawer from "/src/Components/AppDrawer/AppDrawer.js";
import MainGrid from "/src/Components/Grid/Grid.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <MainGrid /> */}
    <AppDrawer />
  </StrictMode>
);
