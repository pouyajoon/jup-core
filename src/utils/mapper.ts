export interface IMapperMap<A, B> {
    a: A;
    b: B;
}
export function mapper<A, B>(r: (
    m: (a: A, b: B) => IMapperMap<A, B>,
    ml: (a: A[], b: B) => Array<IMapperMap<A, B>>) => Array<IMapperMap<A, B>>) {
    function m(a: A, b: B) {
        return { a, b };
    }
    function mL(a: A[], b: B) {
        return a.map(p => m(p, b));
    }
    return r(m, mL);
}
export function getMapperMatch<A, B>(mapperList: Array<IMapperMap<A, B>>, a: A) {
    const match = mapperList.find(m => m.a === a);
    if (!match) {
        throw new Error(`no match on ${a}`);
    }
    return match;
}