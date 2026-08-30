import { i as reactFactory, r as jsxFactory, t as domFactory } from "./framework-CXnKph_e.js";
import Page from "./page-BLge-e2k.js";

const { jsx } = jsxFactory();
const { hydrateRoot } = domFactory();

const root = document.getElementById("root");
if (!root) throw new Error("Game root not found");

hydrateRoot(root, jsx(Page, {}), {
  onUncaughtError(error) { console.error("Rock'n Ride error:", error); },
  onRecoverableError(error) { console.warn("Rock'n Ride recoverable error:", error); }
});
