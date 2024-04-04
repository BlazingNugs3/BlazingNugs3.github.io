import * as wasm from "./gameoflife_bg.wasm";
import { __wbg_set_wasm } from "./gameoflife_bg.js";
__wbg_set_wasm(wasm);
export * from "./gameoflife_bg.js";
