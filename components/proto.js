export default class Component {
    render() {
        this.setup();
        return this.el;
    };

    registerParams(params) {
        params.map((el, id) => {
            // map params to component properties, so they can be accessed in the component
            if (el.initialize) {
                this[el.name] = el.initialize();
            } else {
                this[el.name] = el.value;
            };
        });
        // define semantics for params
        this.semParams = params;
    };
};