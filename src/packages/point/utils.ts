import { IPoint2d } from "./models";

export function distanceBetweenPoints(p1: IPoint2d, p2: IPoint2d) {
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    const a = x1 - x2;
    const b = y1 - y2;
    return Math.sqrt(a * a + b * b);
}
