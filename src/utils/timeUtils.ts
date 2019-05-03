export const rwait = (ms?: number) => {
    ms = ms || 250;
    return new Promise(resolve => {
        setTimeout(
            () => {
                resolve(ms);
            },
            ms);
    });
};

export async function wait(s: number) {
    return new Promise(r => {
        setTimeout(r, s * 1000);
    });
}
