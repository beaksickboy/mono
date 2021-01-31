import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory } from "history";

// Mount function to start up the app
const mount = (el, { onNavigate, initialEntries }) => {
  const history = createMemoryHistory({ initialEntries });
  console.log(history);
  history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate: ({ pathname: newParentPathName }) => {
      const {
        location: { pathname },
      } = history;
      console.log("Parent change");
      if (pathname !== newParentPathName) {
        console.log("Sync parent change");
        history.push(newParentPathName);
      }
    },
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
