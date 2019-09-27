import { Point3d } from './models';

export class Point implements Point3d {
    public x: number;
    public y: number;

    public z: number;

    constructor(x: number, y: number, z?: number) {
        this.set(x, y, z);
    }
    toString() {
        const { x, y, z } = this;
        return `(${x},${y},${z})`;
    }

    set(x: number, y: number, z?: number) {
        this.x = x;
        this.y = y;
        this.z = z || 0;
    }

    get point3d(): Point3d {
        return { x: this.x, y: this.y, z: this.z };
    }

    add(p: Point): Point {
        this.x += p.x;
        this.y += p.y;
        return this;
    }
    substract(p: Point): Point {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    }

    divide(d: number) {
        this.x /= d;
        this.y /= d;
    }

    multiply(d: number): Point {
        this.x *= d;
        this.y *= d;
        return this;
    }

    clone() {
        return Points.copy(this);
    }

    get coordinates() {
        return { x: this.x, y: this.y };
    }

}

export const Points = {
    copy: (p: Point) => new Point(p.x, p.y)
};
