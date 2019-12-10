export type MetaModelObjectTypeDefinitionType = "many-to-many" | "table";
export interface IObjectTypeDefinition {
    singular: string;
    type: MetaModelObjectTypeDefinitionType;

}

export interface IObjectType extends IObjectTypeDefinition {
    readonly plural: string;
    readonly name: string;
    readonly camelized: { singular: string, plural: string, id: string };
    readonly capitalized: { singular: string, plural: string, id: string };
}
