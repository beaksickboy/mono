import { mount } from "Marketing/Bootstrap";

if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#root");
  if (root) {
    mount(root);
  }
}
