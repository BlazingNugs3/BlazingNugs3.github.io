import * as wasm from "gameoflife";

import { Universe } from "gameoflife";

const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();
let fps = 0;

const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();


    const now = performance.now();
    fps = 1000 / (now - renderLoop.lastRender);
    renderLoop.lastRender = now;


    fpsDisplay.textContent = `Frame Rate: ${Math.round(fps)} fps`;

    requestAnimationFrame(renderLoop);
};

renderLoop.lastRender = performance.now();
requestAnimationFrame(renderLoop);