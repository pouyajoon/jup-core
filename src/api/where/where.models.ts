export type JupWhereOperator = 'like' | 'eq' | 'in';
export interface IJupWhereRecordValue {
    operator: JupWhereOperator;
    value: string;
}
export type JupWhereRecord = Record<string, IJupWhereRecordValue>;

export interface IJupWhereNode {
    operator: JupWhereOperator;
    column: string;
    value: any;
}
