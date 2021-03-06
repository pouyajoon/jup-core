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

export function uniqueArray<T extends number | string>(a: T[]) {
    const result = [...new Set(a)];
    return result;
}

interface IObjectWithName { name: string; }
interface IObjectWithId { id: number; }
interface IObjectWithNameAndValue { name: string; value: string; }
export function mergeOnAnObjectByName<T extends IObjectWithName>(acc: Record<string, T>, v: T) {
    acc[v.name] = v;
    return acc;
}
export function mergeOnAnObjectById<T extends IObjectWithId>(acc: Record<number, T>, v: T) {
    acc[v.id] = v;
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

export function mergeOnName<T extends IObjectWithName>(list: T[]): Record<string, T> {
    const init: Record<string, T> = {};
    const modelsStore: Record<string, T> = list.reduce(mergeOnAnObjectByName, init);
    return modelsStore;
}

export function sortOnName(a: IObjectWithName, b: IObjectWithName) {
    return a.name.localeCompare(b.name);
}
