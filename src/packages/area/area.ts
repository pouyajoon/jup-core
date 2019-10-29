import { IPoint2d } from '../point/models';

export function getArea2d(points: IPoint2d[], ratio: number) {
    const l = points.length;
    let det = 0;
    points = points.concat(points[0]);
    for (let i = 0; i < l; i += 1) {
        const a = (ratio * points[i].x) * (points[i + 1].y * ratio);
        const b = (ratio * points[i].y) * (points[i + 1].x * ratio);
        det += a - b;
    }
    return Math.abs(det) / 2;
}
