import { data } from "../fake-data";
import { GenericContextValue } from "./type";

export const initialValue: GenericContextValue = {
    searchReference: '',
    setSearchReference: () => {},
    sortOrder: 'asc',
    setSortOrder: () => {},
    expeditions: data.found,
    setExpeditions: () => {},
};