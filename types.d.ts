import "cytoscape";
import cytoscape from "cytoscape";
import { YourCollectionProps } from "./src/interfaces";

declare module "cytoscape" {
  export interface Collection {
    getInvisibleNodes: (props: YourCollectionProps) => cytoscape.Collection;
  }
}
