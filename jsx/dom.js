export class Props {
    constructor(props) {
        this.props = props;
    }
    render() {
        if (this.props.length === 0) {
            return '';
        } else {
            // props is an object:
            /* 
            {
                id: 'hello',
                class: 'world',
            }
            which corresponds to:
            id="hello" class="world"
            */
            let props = '';
            for (let key in this.props) {
                props += ` ${key}="${this.props[key]}"`;
            }
            return props;
        }
    }
}

export class HTMLElement {
    constructor(tag, props, children) {
        this.tag = tag;
        this.props = props;
        this.children = children;
    };

    render() {

            return `<${this.tag}${this.props.render()}>${this.children.map(child => child instanceof HTMLElement ? child.render() : child).join('')}</${this.tag}>`;
    }
};

export function jsx(tag, details) {
    let detail = details || {};
    let children = detail.children || [];
    delete detail.children;
    // check if children is an array
    if (!Array.isArray(children)) {
        children = [children];
    };
    return new HTMLElement(tag, new Props(detail), children).render();
};

export function jsxs(tag, details) {
    let detail = details || {};
    let children = detail.children || [];
    delete detail.children;
    // check if children is an array
    if (!Array.isArray(children)) {
        children = [children];
    };
    return new HTMLElement(tag, new Props(detail), children).render();
};