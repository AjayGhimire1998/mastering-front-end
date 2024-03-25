"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function getArea(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius ** 2;
//   }
// }
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
    }
}
