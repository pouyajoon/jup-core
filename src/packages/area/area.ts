import { Point2d } from '../point/models';

export function getArea2d(points: Point2d[]) {
    const l = points.length;
    let det = 0;
    points = points.concat(points[0]);

    for (let i = 0; i < l; i += 1) {
        det += points[i].x * points[i + 1].y - points[i].y * points[i + 1].x;
    }
    return Math.abs(det) / 2;
}
