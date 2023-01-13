import React, { useState } from "react";
import { states } from "../services/states";
import { getCitiesByState, getSchoolsByCity, getSchoolByName, advancedSearch } from '../services/schoolsApi';
import SchoolCard from "../components/SchoolCard";
import Header from "../components/Header";
import styles from '../components/Escolas.module.css';

function Escolas() {
    const [cities, setCities] = useState();
    const [state, setState] = useState('--');
    const [citiesId, setCitiesId] = useState();
    const [saveId, setSaveId] = useState();
    const [nameToSearch, setNameToSearch] = useState();
    const [schools, setSchools] = useState();
    const [showTable, setShowTable] = useState(true);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

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

    const handleFilters = async (e) => {
        e.preventDefault();
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
        if (getSchool[0] === 0) setNotFound(true);
        setLoading(false);
        setSchools(getSchool[1])
        setShowTable(true);
    }

    const cleanFilters = (e) => {
        e.preventDefault();
        setNameToSearch('');
        setState('--');
        setSaveId(undefined);
        setShowTable(false);
        setNotFound(false);
        setLoading(false);
    }

    return (
        <div className={styles.dashboardContainer}>
            <Header />
            <div className={styles.formContainer}>
                <h1>Listagem de Escolas</h1>
                <form >

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
                                    id="city-input"
                                    name="city-input"
                                    onChange={({ target: { value } }) => handleCity(value)}
                                    defaultValue={cities}
                                >
                                    <option>--</option>
                                    {cities !== '--' && cities.map(city => <option>{city}</option>)}
                                </select>

                            </label>
                        </>
                    )}
                    <nav>
                        <button onClick={handleFilters}>Aplicar filtros</button>
                        <button onClick={cleanFilters}>Limpar filtros</button>
                    </nav>
                </form>

            </div>

            {loading ? <p>Loading</p> : schools && showTable && (
                schools.map((school, index) => (
                    <SchoolCard key={index} school={school} index={index} />
                ))
            )}

            {notFound && <p>Nenhum resultado encontrado</p>}
        </div>
    )
}

export default Escolas;