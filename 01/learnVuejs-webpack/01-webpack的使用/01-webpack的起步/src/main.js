//1.使用commonjs的模块化规范
const {add, mul} = require('./mathUtils.js')

console.log(add(20, 30));
console.log(mul(2, 3));

//最新版打包命令是：npx webpack ./src/main.js -o ./dist/bundle.js --mode development

//2.使用ES6的模块化的规范
import {name, age, height} from './info';

console.log(name);
console.log(age);
console.log(height);