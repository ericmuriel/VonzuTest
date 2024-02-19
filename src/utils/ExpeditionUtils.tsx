import React from "react";
import { Data, ExpeditionId, MoreThanOne, SetExpeditions, SetSearchReference } from "./types";
import Tooltip from '@mui/material/Tooltip';
  
  export const handleSortOrderChange = (
    selectedSortOrder: string,
    expeditions: ExpeditionId[],
    setExpeditions: SetExpeditions
  ): void => {
      if (!selectedSortOrder || !expeditions || !setExpeditions) {
        return;
      }
      const sortedExpeditions = [...expeditions].sort((a, b) =>
        selectedSortOrder === 'asc' ? a.id - b.id : b.id - a.id
      );
      setExpeditions(sortedExpeditions);
  };

  export const handleSelectIndividual = (id: number,expeditions: ExpeditionId[],setExpeditions: SetExpeditions): void => {
    const updatedExpeditions = expeditions.map((expedition) => {
      if (expedition.id === id) {
        return {
          ...expedition,
          selected: !expedition.selected,
        };
      }
      return expedition;
    });
    setExpeditions(updatedExpeditions);
  };
  
  export const handleSelectAll = (
    selectAll: boolean,
    expeditions: ExpeditionId[],
    setExpeditions: SetExpeditions
  ): void => {
    const updatedExpeditions = expeditions.map((expedition) => ({
      ...expedition,
      selected: !selectAll,
    }));
    setExpeditions(updatedExpeditions);
  };
  
  export const handleSearch = (
    searchReference: string,
    setExpeditions: SetExpeditions,
    data: Data
  ): void => {
    const foundExpeditions = data.found.filter((expedition) =>
      expedition.reference.toLowerCase().includes(searchReference.toLowerCase())
    );
    setExpeditions([...foundExpeditions]);
  };
  
  export const handleChange = (
    value: string,
    setSearchReference: SetSearchReference,
    setExpeditions: SetExpeditions,
    searchReference: string,
    data: Data
  ): void => {
    setSearchReference(value);
    if (value.trim() === "") {
      setExpeditions(data.found);
    } else {
      handleSearch(value, setExpeditions, data);
    }
  };

  export const MoreThanOneData: React.FC<MoreThanOne> = ({ data }) => {
    const clientEmails = data.client.profile.emails || [];
    const renderEmails = () => {
    const primaryEmail = clientEmails[0];
    const additionalEmails = clientEmails.slice(1);
      return (
        <>
          <>
            <i className="bi bi-house icon"></i>
            <Tooltip title={primaryEmail} arrow>
              <span style={{ cursor: 'pointer', marginLeft: '5px' }}>{primaryEmail}</span>
            </Tooltip>
          </>
          {additionalEmails.length > 0 && (
              <Tooltip title={additionalEmails.join(', ')} arrow>
                <span style={{ cursor: 'pointer', marginLeft: '5px', color: 'blue', border:'1px solid black', borderRadius:20, padding:3, fontSize:12 }}>
                  +{additionalEmails.length}
                </span>
              </Tooltip>
          )}
        </>
      );
    };
  
    return (
      <>{renderEmails()}</>
    );
  };