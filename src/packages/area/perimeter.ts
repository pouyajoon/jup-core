import { IPoint2d } from '../point/models';
import { lineDistance } from './distance';

export function getPerimeter(points: IPoint2d[], ratio: number) {
    let d = 0;
    let sumDistance = 0;

    let p2: IPoint2d;
    let p1: IPoint2d;
    for (let i = 0; i < points.length - 1; i += 1) {
        p1 = points[0];
        if (i === 0) {
            p2 = points[points.length - 1];
        } else {
            p2 = points[i + 1];
        }
        d = lineDistance(p1, p2) * ratio;
        sumDistance += d;
    }
    return parseFloat(sumDistance.toFixed(1));
}