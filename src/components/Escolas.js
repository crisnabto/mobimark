import React, { useState } from "react";
import { states } from "../services/states";
import { getCitiesByState, getSchoolsByCity, getSchoolByName } from '../services/schoolsApi';

function Escolas() {
    const [cities, setCities] = useState();
    const [state, setState] = useState('--');
    const [citiesId, setCitiesId] = useState();
    const [schools, setSchools] = useState();
    const [showTable, setShowTable] = useState(true);

    const handleState = (value) => {
        if (value !== '--') {
            setState(value);
            setShowTable(false);
            getCitiesByState(value).then((response) => splitValues(response));
        } else {
            setState('--');
        }
    }

    const splitValues = (response) => {
        setCitiesId(response);
        setCities(response.map((city) => city.split(":")[1]));
    }

    const handleCity = (value) => {
        if (value !== '--') {
            const cityId = citiesId.find(city => city.includes(value)).split(":")[0];
            getSchoolsByCity(cityId).then(response => setSchools(response[1]));
            setShowTable(true);
        } else {
            setShowTable(false);
        }
    }

    const handleSearch = (value) => {
        getSchoolByName(value).then(response => setSchools(response[1]));
        setState('');
        setShowTable(true);
    }

    return (
        <div>
            <form>
                <h1>Escolas</h1>
                <p>Pesquisa por nome da Escola</p>
                <label htmlFor="search-name">
                    <input 
                        id="search-name"
                        name="search-name"
                        onChange={ ({ target: { value }}) => handleSearch(value) }
                    />
                </label>

                <p>Selecione um estado:</p>
                <label htmlFor="state-input">
                    <select
                        id="state-input"
                        name="state-input"
                        onChange={ ({ target: { value }}) => handleState(value) }
                        defaultValue={ state }
                    >
                    { states.map(state => <option>{state}</option>)}
                    </select>

                </label>

                { cities && state !== '--' &&  (
                    <>
                    <p>Selecione uma cidade:</p>
                    <label htmlFor="city-input">
                        <select
                            id="state-input"
                            name="state-input"
                            onChange={ ({ target: { value }}) => handleCity(value) }
                            defaultValue={ cities }
                        >
                            <option>--</option>
                            { cities !== '--' && cities.map(state => <option>{state}</option>)}
                        </select>

                    </label>
                    </>
                )}
            </form>

            { schools && state !== '--' && showTable && (
                <table>
                    <tr>
                            <td>Codigo</td>
                            <td>Nome</td>
                        </tr>
                    { schools.map((school) => (
                        <tr>
                            <td>{school.cod}</td>
                            <td>{school.nome}</td>
                        </tr>
                    ))}

                </table>
            )}
        </div>
    )
}

export default Escolas;