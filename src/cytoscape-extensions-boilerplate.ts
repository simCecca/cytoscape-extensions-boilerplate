import YourCoreFunction from "./core/coreFunc";

export * from "./interfaces";

// registers the extension on a cytoscape lib ref
export default function register(cytoscape) {
  if (!cytoscape) {
    return;
  } // can't register if cytoscape unspecified

  cytoscape("core", "yourCoreFunction", YourCoreFunction); // register with cytoscape.js
}

if (typeof window.cytoscape !== "undefined") {
  register(window.cytoscape);
}
