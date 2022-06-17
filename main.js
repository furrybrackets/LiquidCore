import pathNode from "path";
import Routes from "./routes.js";
import fs from "fs-extra";
import GetComponents from './parse.js';
import RegComponent from "./components/register.js";
import Comp from "./components/proto.js";

export const RegisterComponent = RegComponent;
export const Component = Comp;

export function RegisterJIT(directory, config) {
  return new JITInstance(directory, config);
};

class JITInstance {
  constructor(directory, config) {
    this.dir = directory;
    this.config = config;
    this.currentTask = null;
    this.tasks = [];
    // compiled HTML routes
    this.routes = new Routes();
    // list of paths to files to be compiled
    this.pageDir = pathNode.join(directory, "pages");
    this.componentsDir = pathNode.join(directory, "components");
    this.templatesDir = pathNode.join(directory, "templates");
    this.config = config;

    // pageList is an array of all pages in the directory.
    // pages has more information. It is an object with the following properties:
    //   - name: the name of the page
    //   - path: the path to the page
    //   - components: an array of components used in the page
    //   - templates: an array of templates used in the page
    //   - html: the most recent compiled HTML

    this.PageContext = [];

    // componentList is an array of all components in the directory.

    this.components = [];
    this.templates = [];
    this.pages = [];

    // get all pages, components, templates in the directory pages/ using fs-extra.

    fs.readdirSync(this.pageDir).forEach(page => {
        this.pageList.push(page);
    });

    fs.readdirSync(this.componentsDir).forEach(component => {
        this.componentList.push(component);
    });

    fs.readdirSync(this.templatesDir).forEach(template => {
        this.templateList.push(template);
    });

  };

  addTask(task) {
    this.tasks.push(task);
    if (this.currentTask === null) {
      this.currentTask = task;
    }
  }

  runTask() {
    if (this.currentTask === null) {
      return;
    }
    this.currentTask();
    this.tasks.pop();
  };

  
  // run all tasks until completion
  render() {
    while (this.tasks.length > 0) {
      this.runTask();
    }
    return this.routes;
  };
}

