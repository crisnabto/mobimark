import React, { useState } from "react";
import { states } from "../services/states";
import { getCitiesByState, getSchoolsByCity, getSchoolByName, advancedSearch } from '../services/schoolsApi';
import SchoolCard from "../components/SchoolCard";

function Escolas() {
    const [cities, setCities] = useState();
    const [state, setState] = useState('--');
    const [citiesId, setCitiesId] = useState();
    const [saveId, setSaveId] = useState();
    const [nameToSearch, setNameToSearch] = useState();
    const [schools, setSchools] = useState();
    const [showTable, setShowTable] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleState = async (value) => {
        if (value !== '--') {
            setState(value);
            setShowTable(false);
            const response = await getCitiesByState(value);
            setCitiesId(response);
            setCities(response.map((city) => city.split(":")[1]));
        } else {
            setState('--');
        }
    }

    const handleCity = (value) => {
        if (value !== '--') {
            const cityId = citiesId.find(city => city.includes(value)).split(":")[0];
            setSaveId(cityId);
            getSchoolsByCity(cityId).then(response => setSchools(response[1]));
        }
    }

    const handleFilters = async () => {
        setLoading(true);
        let getSchool;
        if (saveId && state) {
            if (nameToSearch) {
                getSchool = await advancedSearch(saveId, state, nameToSearch);
            } else {
                getSchool = await getSchoolsByCity(saveId);
            }
        } else if (nameToSearch && state === '--') {
            getSchool = await getSchoolByName(nameToSearch);
        }
        setLoading(false);
        setSchools(getSchool[1])
        setShowTable(true);
    }

    const cleanFilters = () => {
        setNameToSearch('');
        setState('--');
        setSaveId(undefined);
        setShowTable(false);
    }

    return (
        <div>
            <h1>Listagem de Escolas</h1>
            <form>

                <label htmlFor="search-name">
                    <span>Nome</span>
                    <input
                        id="search-name"
                        name="search-name"
                        onChange={({ target: { value } }) => setNameToSearch(value)}
                        value={nameToSearch}
                    />
                </label>

                
                <label htmlFor="state-input">
                    <span>Estado</span>
                    <select
                        id="state-input"
                        name="state-input"
                        onChange={({ target: { value } }) => handleState(value)}
                        value={state}
                    >
                        {states.map(state => <option>{state}</option>)}
                    </select>

                </label>

                {cities && state !== '--' && (
                    <>
                        <label htmlFor="city-input">
                            <span>Município</span>
                            <select
                                id="state-input"
                                name="state-input"
                                onChange={({ target: { value } }) => handleCity(value)}
                                defaultValue={cities}
                            >
                                <option>--</option>
                                {cities !== '--' && cities.map(state => <option>{state}</option>)}
                            </select>

                        </label>
                    </>
                )}
            </form>

            <nav>
                <button onClick={handleFilters}>Aplicar filtros</button>
                <button onClick={cleanFilters}>Limpar filtros</button>
            </nav>

            {loading ? <p>Loading</p> : schools && showTable && (
                schools.map((school, index) => (
                    <SchoolCard key={ index} school={school} index={index} />
                ))
            )}
        </div>
    )
}

export default Escolas;