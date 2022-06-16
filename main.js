import pathNode from "path";
import Routes from "./routes.js";
import fs from "fs-extra";

export function registerDirectoryJIT(directory, config) {
  return new JITInstance(directory, config);
}

class JITInstance {
  constructor(directory, config) {
    this.dir = directory;
    this.config = config;
    this.currentTask = null;
    this.tasks = [];
    // compiled HTML routes
    this.routes = new Routes();
    this.pageList = pathNode.join(directory, "pages");
    this.components = pathNode.join(directory, "components");
    this.templates = pathNode.join(directory, "templates");
    this.config = config;

    // pageList is an array of all pages in the directory.
    // pages has more information. It is an object with the following properties:
    //   - name: the name of the page
    //   - path: the path to the page
    //   - components: an array of components used in the page
    //   - templates: an array of templates used in the page
    //   - html: the most recent compiled HTML

    this.pages = {};
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
