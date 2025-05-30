import { c, type Component } from "./base.ts";

export const backdrop: Component = c(
  "absolute top-0 left-0 w-screen h-screen bg-white/50 backdrop-blur-lg flex items-center justify-center p-3 z-75",
);
