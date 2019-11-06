import { IPoint2d } from '../point/models';

export function rotate(cx: number, cy: number, x: number, y: number, angle: number): IPoint2d {
    const radians = (Math.PI / 180) * angle;
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    const nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
    const ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return { x: nx, y: ny };
}

export function rotatePoint(center: IPoint2d, point: IPoint2d, angle: number): IPoint2d {
    const { x: cx, y: cy } = center;
    const { x, y } = point;
    return rotate(cx, cy, x, y, angle);
}
