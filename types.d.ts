import "cytoscape";
import cytoscape from "cytoscape";
import { YourCoreProps } from "./src/interfaces";

declare module "cytoscape" {
  interface Core {
    yourCoreFunction: (props: YourCoreProps) => cytoscape.Core;
  }
}
