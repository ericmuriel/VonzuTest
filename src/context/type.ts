import { Expedition } from "../pages/types";

export interface GenericContextValue {
    searchReference: string;
    setSearchReference: React.Dispatch<React.SetStateAction<string>>;
    sortOrder: string;
    setSortOrder: React.Dispatch<React.SetStateAction<string>>;
    expeditions: Expedition[];
    setExpeditions: React.Dispatch<React.SetStateAction<Expedition[]>>;
}