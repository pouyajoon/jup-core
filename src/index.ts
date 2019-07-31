export { camelize, capitalize, toPlural, singularize, toUnderscore } from './utils/stringUtils';
export {
    mergeArrayOfArray, chunk, mergeOnAnObjectByName,
    mergeValueByName, mergeOnAnObjectByNameRemoveName,
    mergeOnName, mergeOnAnObjectById
} from './utils/arrayUtils';
export { rwait, wait } from './utils/timeUtils';
export { mapper, getMapperMatch } from './utils/mapper';
import { IMapperMap } from './utils/mapper';
export type IMapperMap<A, B> = IMapperMap<A, B>;

export { PropertyTypeJupType } from './metaModel/propertyTypes';

export { createFilter } from './api/where/where';
export { IJupWhereNode, JupWhereRecord, JupWhereOperator, IJupWhereRecordValue } from './api/where/where.models';