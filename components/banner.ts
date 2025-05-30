import { c, type Component } from "./base.ts";

export const banner = (
  variant: "success" | "danger" | "neutral",
): Component => {
  let color = "slate";
  switch (variant) {
    case "success":
      color = "border-green-500 text-green-800 bg-green-100";
      break;
    case "danger":
      color = "border-red-500 text-red-800 bg-red-100";
      break;
  }
  return c(`
        border
        ${color}
        rounded-md
        px-3 py-2
    `);
};
