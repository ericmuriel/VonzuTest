import React, { createContext, useState } from 'react'
import { initialValue } from './initialValues';
import { Expedition } from '../pages/types';
import { data } from '../fake-data';
import { GenericContextValue } from './type';

export const GenericContext = createContext(initialValue)

export default function GenericContextProvider({ children }: any){
    const [searchReference, setSearchReference] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("asc");
    const [expeditions, setExpeditions] = useState<Expedition[]>(data.found);
 
    const contextValue: GenericContextValue = {
        searchReference, 
        setSearchReference,
        sortOrder, 
        setSortOrder,
        expeditions, 
        setExpeditions,
    }
    
    return (
        <GenericContext.Provider value={contextValue}>
            {children}
        </GenericContext.Provider>)

}