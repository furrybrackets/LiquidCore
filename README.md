# LiquidCore
Core functionality for Liquid, utilized by the Liquid CLI tool.

## How does JIT/Hot-Reload work?

Liquid creates a queue of tasks to complete. Once the tasks are finalized, Liquid does all the tasks in the `JITInstance.taskList` until there are none left. Then it passes the `Routes` class back to `@liquidmd/cli` where it is hosted.

## How are pages tracked?

Each page in the `pages/` directory is assigned specific tags at startup:

```ts
interface PageTag {
  name: string, // name of the page
  path: TSPath.Path, // the path to the page
  components: Array<ComponentTag>, // array of components used in the page
  templates: Array<TemplateTag>, // array of templates used in the page,
  html: HTMLObject // most recently compiled html
};
```
So when any component or template is changed, the page is re-rendered. Otherwise, we use the already rendered HTML and pass that to the Router.
