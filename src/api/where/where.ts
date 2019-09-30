import { JupWhereOperator, IJupWhereNode } from './where.models';

export function createFilter(operator: JupWhereOperator, column: string, value: string | number): IJupWhereNode {
    return { operator, column, value };
}
