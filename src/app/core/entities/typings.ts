export enum FieldType {
  input,
  checkbox,
  string
}

export interface SpecialProcessing {
  id?: number;
  isChacked?: boolean;
  caption: string;
  value?: number
}

export interface StoreSpecialProcessing {
  allItems: Array<SpecialProcessing>;
  value: number;
}

export interface SpecialProcessingREsult {
  caption: string;
  value: string | number | boolean | any;
  type: FieldType
}

export interface AerosolPointInterface {
  name: string;
  quantity: string;
  square: string;
  sumSquare: number;
}

export interface AerosolResultInterface {
 sum: number;
 addDynamicElement: Array<AerosolPointInterface>;
}
