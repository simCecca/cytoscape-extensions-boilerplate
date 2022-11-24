import { YourCollectionProps } from "../interfaces";

function getInvisibleNodes(options: YourCollectionProps) {
  const cy = this.cy();
  return cy.nodes().filter((node) => !node.visible());
}

export default getInvisibleNodes;
