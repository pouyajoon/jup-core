export function mergeArrayOfArray<T>(a: T[][]) {
    return [].concat.apply([], a) as T[];
}

export function chunk<T>(list: T[], size: number): T[][] {
    return list.reduce(
        (all: any, one: any, i) => {
            const ch = Math.floor(i / size);
            all[ch] = [].concat((all[ch] || []), one);
            return all;
        },
        []);
}

interface IObjectWithName { name: string; }
interface IObjectWithNameAndValue { name: string; value: string; }
export function mergeOnAnObjectByName(acc: Record<string, IObjectWithName>, v: IObjectWithName) {
    acc[v.name] = v;
    return acc;
}

export function mergeValueByName(acc: Record<string, string>, v: IObjectWithNameAndValue) {
    acc[v.name] = v.value;
    return acc;
}
export function mergeOnAnObjectByNameRemoveName(acc: Record<string, IObjectWithName>, v: IObjectWithName) {
    acc[v.name] = v;
    delete v.name;
    return acc;
}