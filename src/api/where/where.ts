import { JupWhereOperator, IJupWhereNode } from './where.models';

export function createFilter(operator: JupWhereOperator, column: string, value: string | number | number[] | string[]): IJupWhereNode {
    return { operator, column, value };
}
