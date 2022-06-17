import { transformSync } from "@babel/core";

export default function TranspileJSX(code) {
    return transformSync(code, {
        plugins: [
            ["@babel/plugin-transform-react-jsx", {
                runtime: 'automatic',
                importSource: '@liquidmd'
            }],
        ]
    }).code;
}