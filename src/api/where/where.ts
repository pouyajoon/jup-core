import { JupWhereOperator, IJupWhereNode } from './where.models';

export function createFilter(operator: JupWhereOperator, column: string, value: string): IJupWhereNode {
    return { operator, column, value };
}
