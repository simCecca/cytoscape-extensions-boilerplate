import { Core, Collection, BaseLayoutOptions } from "cytoscape";

/**
 * LayoutCytoscape is composed by the elements that are passing you from cytoscape
 *  - the Core
 *  - the Collection
 *  - the name
 * everything you pass in the method layout() of cytoscape extends this interface
 * example: cy.layout({name: "myLayout", maxTimeExecution: 1000, onSomethingHappen: () => {}});
 *
 * In particular the YoutLayoutProps interface is composed by
 *  - maxExecutionTime: number
 *  - onSomethingHappen: Function
 */
export interface LayoutCytoscape extends YourLayoutProps {
  cy: Core;
  eles: Collection;
  name: string;
}

export interface YourLayoutProps {}

/**
 * LayoutCytoscape interface is something that needs to who is developing the layout.
 * YourCytoscapeLayoutOptions is an interface  needed to the developers that has to use the layout.
 */
export interface YourCytoscapeLayoutOptions
  extends BaseLayoutOptions,
    YourLayoutProps {}
