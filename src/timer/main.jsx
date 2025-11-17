import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import Timer from "./Timer.jsx";

createRoot(document.getElementById('root'))
    .render(
        <StrictMode>
            <Timer />
        </StrictMode>
    );