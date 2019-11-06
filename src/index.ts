export { camelize, capitalize, toPlural, singularize, toUnderscore } from './utils/stringUtils';
export * from './utils/arrayUtils';
export { rwait, wait } from './utils/timeUtils';
export { mapper, getMapperMatch } from './utils/mapper';
import { IMapperMap } from './utils/mapper';
export type IMapperMap<A, B> = IMapperMap<A, B>;

export { PropertyTypeJupType } from './metaModel/propertyTypes';

export { createFilter } from './api/where/where';
export { IJupWhereNode, JupWhereRecord, JupWhereOperator, IJupWhereRecordValue } from './api/where/where.models';
export * from './packages/point/point';
export * from './packages/point/models';
export * from './packages/area/area';
export * from './packages/area/distance';
export * from './packages/area/perimeter';
export * from './packages/geometry/geometry';
import { ColorsMap } from './packages/colors/colors.models';
export type ColorsMap = ColorsMap;
