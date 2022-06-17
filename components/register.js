function RegisterComponent(component, options) {
    let exports = {
        component: component,
    };

    // add all options parameters to the exports object
    if (options) {
        for (let key in options) {
            exports[key] = options[key];
        }
    };
    return exports;
};

export default RegisterComponent;