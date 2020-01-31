"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// module 模块
// import { PI, calcCircle } from './stuff/circle'
var Circle = __importStar(require("./stuff/circle"));
var sumValue_1 = __importDefault(require("./stuff/sumValue"));
// console.log(PI)
// console.log(calcCircle(8))
console.log(Circle.PI);
console.log(Circle.calcCircle(8));
console.log(sumValue_1.default(8, 9));
// tsc --module commonjs app.ts
// tsc --module amd app.ts
