import { IPoint2d } from "../point/models";

export function lineDistance(point1: IPoint2d, point2: IPoint2d) {
    let xs = point2.x - point1.x;
    xs = xs * xs;
    let ys = point2.y - point1.y;
    ys = ys * ys;
    return Math.sqrt(xs + ys);
}
