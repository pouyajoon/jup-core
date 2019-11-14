import { IPoint2d } from "../point/models";
import { lineDistance } from "./distance";

export function getPerimeter(points: IPoint2d[], ratio: number) {
    let d = 0;
    let sumDistance = 0;
    for (let i = 0; i < points.length - 1; i += 1) {
        const p1 = points[0];
        const p2 = i === 0 ? points[points.length - 1] : points[i + 1];
        d = lineDistance(p1, p2) * ratio;
        sumDistance += d;
    }
    return parseFloat(sumDistance.toFixed(1));
}
