import { twMerge } from "tailwind-merge";

export type Component = (userStyles?: string) => object | { class: string };

export const c =
  (styles: string, attrs: object = {}): Component =>
  (userStyles: string = "") => ({
    ...attrs,
    class: twMerge(styles, userStyles),
  });
