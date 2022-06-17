import { transformSync } from '@babel/core';
import fs from 'fs-extra';

const file = fs.readFileSync('./test.js', 'utf8');

console.log(transformSync(file, {
    plugins: [['@babel/plugin-transform-react-jsx', {
        runtime: 'automatic',
        importSource: '@liquidmd'
    }]],
    filename: 'test.js',
}).code);