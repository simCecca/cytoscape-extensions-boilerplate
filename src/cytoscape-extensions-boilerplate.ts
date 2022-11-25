import getInvisibleNodes from "./collection/invisibleNodes";

export * from "./interfaces";

// registers the extension on a cytoscape lib ref
export default function register(cytoscape) {
  if (!cytoscape) {
    return;
  } // can't register if cytoscape unspecified

  cytoscape("collection", "getInvisibleNodes", getInvisibleNodes); // register with cytoscape.js
}

if (typeof window.cytoscape !== "undefined") {
  register(window.cytoscape);
}
