import React from "react";
import ReactDOMClient from "react-dom/client";
import { TagOnAmbientMain } from "./screens/TagOnAmbientMain";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<TagOnAmbientMain />);
