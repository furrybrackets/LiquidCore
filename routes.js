export default class Routes {
    constructor() {
        this.routes = new Map();
    };

    add(route, html) {
        // check if route exists
        if (this.has(route)) {
            throw new Error(`Route ${route} already exists`);
        };
        this.routes.set(route, html);
    };

    get(route) {
        return this.routes.get(route);
    };

    has(route) {
        return this.routes.has(route);
    };

    delete(route) {
        this.routes.delete(route);
    };

    clear() {
        this.routes.clear();
    };

    change(route, html) {
        this.routes.set(route, html);
    };
}