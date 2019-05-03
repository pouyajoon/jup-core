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
