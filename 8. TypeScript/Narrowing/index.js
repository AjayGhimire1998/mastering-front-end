"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        case "triangle":
            return Math.pow(shape.sideLength, 3);
        default:
            var _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
