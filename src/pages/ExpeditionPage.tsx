import React, { useContext, useState } from 'react';
import { GenericContext } from '../context/GenericContext';
import { dateConversor, formatConversor } from '../utils/DateConversors';
import { minusToMayus } from '../utils/FontConversors';
import './ExpeditionPage.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from '../fake-data';
import { MoreThanOneData, handleChange, handleSelectAll, handleSelectIndividual, handleSortOrderChange } from '../utils/ExpeditionUtils';
import "bootstrap-icons/font/bootstrap-icons.css";

const ExpeditionPage = () => {
  const { searchReference, setSearchReference, expeditions, setExpeditions } = useContext(GenericContext);
  const [sortOrder, setSortOrder] = useState<string>('desc');
  const [selectCheckbox] = useState(false);
  const [selectAll, setSelectAll] = useState(selectCheckbox);

  const handleSortOrderChangeLocal = (selectedSortOrder:string) => {
    handleSortOrderChange(selectedSortOrder, expeditions, setExpeditions);
    setSortOrder(selectedSortOrder);
  };

  const handleSelectIndividualLocal = (id:number) => {
    handleSelectIndividual(id, expeditions, setExpeditions);
  };

  const handleSelectAllLocal = () => {
    handleSelectAll(selectAll, expeditions, setExpeditions);
    setSelectAll(!selectAll);
  };

  const handleChangeLocal = (e:React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value, setSearchReference, setExpeditions, searchReference, data);
  };
  
  return (
    <div className="container-fluid p-0 allcontainer ">
      <div className="row searchBarContainer me-0">
        <div className="col m-3 d-flex justify-content-start">
          <label>
            <input
              type="text"
              value={searchReference}
              placeholder='Buscar...'
              onChange={handleChangeLocal}
              className="form-control custom-search-input"
            />
          </label>
        </div>
      </div>

      <div className="row mt-2 m-1 mb-3">
      <div className="col-md-9 outer-container d-flex ">
        <div className="form-check align-self-sm-center">
          <input
            type="checkbox"
            className="form-check-input custom-checkbox "
            id="selectAllCheckbox"
            checked={selectAll}
            onChange={handleSelectAllLocal}
          />
          <label className="form-check-label" htmlFor="selectAllCheckbox">
            Seleccionar Todos
          </label>
        </div>
      </div>

        <div className="col-md-3 d-flex outer-container justify-content-center align-items-center">
          <div className="orderBy">Ordenar por</div>
          <select value={sortOrder} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => handleSortOrderChangeLocal(e.target.value)} className="form-select customSelect">
            <option value="desc">ID Descendente</option>
            <option value="asc">ID Ascendente</option>
          </select>
        </div>
      </div>

      {expeditions.map((expedition) => (
        <div className="info-container row paper-row p-3 mb-3 bg-white mx-3" style={{borderRadius:'20px'}} key={expedition.id}>
          <div className="col-md-4 paper-col">
            <div className="d-flex p-1">
              <input
                type="checkbox"
                checked={expedition.selected || false}
                onChange={() => handleSelectIndividualLocal(expedition.id)}
                className="form-check-input me-3 custom-checkbox"
              />
              <div className="me-2" style={{ textDecoration: 'underline' }}>{expedition.id}</div>
              <span className="me-2" >|</span>
              <div className="me-2"><i className="bi bi-arrow-left-right icon"></i>{expedition.reference}</div>
              <div className='text-muted grey-text'>{`(Creado hace ${dateConversor(expedition.createdAt)})`}</div>
            </div>
            <div className="d-flex p-1">
              <input type="checkbox" className="form-check-input me-3 " />
              <div className="me-3"><i className="bi bi-calendar icon"></i>{formatConversor(expedition.createdAt,'dd/MM/yyyy')}</div>
              <span className='text-muted text-sm '><i className="bi bi-clock icon"></i> Sin información</span>
            </div>
          </div>

          <div className="col-md-3 paper-col">
            <div className="">
              <div className="d-flex p-1">
                <span><i className="bi bi-people icon"></i>Teléfono</span>
              </div>
              <div className="d-flex p-1">
                <span >{<MoreThanOneData data={expedition}/>}</span>
              </div>
            </div>
          </div>

          <div className="col-md-4 paper-col">
            <div className="d-flex p-1">
              <div className="me-2"><i className="bi bi-circle-fill green-icon"></i>{minusToMayus(expedition.statusCode)}</div>
              <div className='text-muted text-sm grey-text' >{`(${formatConversor(expedition.createdAt,'dd/MM/yyyy')}, ${formatConversor(expedition.createdAt,'hh:mm:ss a')})`}</div>
            </div>
            <div className="d-flex p-1">
              <div>
              <i className="bi bi-geo-alt icon"></i>{expedition.street}, {expedition.postalCode} {expedition.city}, {expedition.country}
              </div>
            </div>
          </div>

          <div className="col-md-1  paper-col d-flex align-items-center justify-content-center">
            <span>• • •</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpeditionPage;
