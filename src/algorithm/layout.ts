import { Core } from "cytoscape";
import { LayoutCytoscape } from "../interfaces";
import { getCanvasDimension } from "../util";

function LayoutName(options: LayoutCytoscape) {
  this.default = {};
  this.options = options;
}

LayoutName.prototype.run = function () {
  const params: LayoutCytoscape = this.options;

  const cy: Core = params.cy;

  const container = cy.container();
  if (!container) {
    return this;
  }

  // if you need the canvas dimension
  const { width, height } = getCanvasDimension(container);

  // nodes positioning
  cy.nodes().positions(() => {
    return {
      x: width * Math.random(),
      y: height * Math.random(),
    };
  });

  return this;
};

LayoutName.prototype.stop = function () {};

export default LayoutName;
