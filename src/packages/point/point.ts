import { IPoint2d, IPoint3d } from "./models";

export class Point implements IPoint3d {
    public x: number;
    public y: number;

    public z: number;

    constructor(x: number, y: number, z?: number) {
        this.set(x, y, z);
    }
    public toString() {
        const { x, y, z } = this;
        return `(${x},${y},${z})`;
    }

    public set(x: number, y: number, z?: number) {
        this.x = x;
        this.y = y;
        this.z = z || 0;
    }

    get point3d(): IPoint3d {
        return { x: this.x, y: this.y, z: this.z };
    }

    public add(p: Point): Point {
        this.x += p.x;
        this.y += p.y;
        return this;
    }
    public substract(p: Point): Point {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    }

    public divide(d: number) {
        this.x /= d;
        this.y /= d;
    }

    public multiply(d: number): Point {
        this.x *= d;
        this.y *= d;
        return this;
    }

    public clone() {
        return Points.copy(this);
    }

    get point2d(): IPoint2d {
        return { x: this.x, y: this.y };
    }

    public equals(p?: Point) {
        if (p === undefined) {
            return false;
        }
        const { x, y } = this;
        return p.x === x && p.y === y;
    }

}

export const Points = {
    copy: (p: Point) => new Point(p.x, p.y)
};
