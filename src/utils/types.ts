import { Expedition } from "../pages/types";

export interface ExpeditionId {
    reference: any;
    id: number;
    selected?: boolean;
  }
  
  export interface Data {
    found: ExpeditionId[];
  }
  
  export type SetExpeditions = React.Dispatch<React.SetStateAction<ExpeditionId[]>>;
  export type SetSearchReference = React.Dispatch<React.SetStateAction<string>>;
  export interface MoreThanOne {data: Expedition;}