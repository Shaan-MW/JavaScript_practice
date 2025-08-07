console.log("ES6 Modules.");

import {PI,getCircumference,getArea,getVolume} from './math.js';

console.log(`PI : ${PI}`);
console.log(`Circumference : ${getCircumference(7.2).toFixed(3)}`);
console.log(`Area : ${getArea(4.5).toFixed(2)}`);
console.log(`Volume : ${getVolume(5.4).toFixed(2)}`);