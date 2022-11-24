This is a Simple project created and maintained with the just for fun philosophy

This is a boilerplate to be able to develop an extension of type Layout in cytoscape

# usage

- Clone/fork/download the repository

- Install the dependences

```
npm install
```

- Run the project

```
npm run dev
```

# develop mode

You can use the npm link logic for the develop mode, I think it's the easiest way, but there are many other ways.

- Inside this project, create the link

```
sudo npm link
```

- inside the project that use cytoscape with us extension

```
sudo npm link extensionPath
```

# deploy on npm

```
npm login
```

```
npm publish
```

# end application

```
import cytoscape from "cytoscape";
import Random, {YourLayoutProps} from "cytoscape-extensions-boilerplate";

cytoscape.use(Random);


const layoutProps: YourLayoutProps = {
    ....
}

const cy = cytoscape({
    ....
    layout: layoutProps
});

or

cy.layout(layoutProps).run();

```
