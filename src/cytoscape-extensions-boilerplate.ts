// registers the extension on a cytoscape lib ref
export default function register(cytoscape) {
  if (!cytoscape) {
    return;
  } // can't register if cytoscape unspecified

  /**
   * type = core | layout | collection
   * name = the name of the functionality
   * mainFunction = function that if performed, performs the tasks we want
   *
   * cytoscape(type, name, mainFunction);
   *  */
}

if (typeof window.cytoscape !== "undefined") {
  register(window.cytoscape);
}
