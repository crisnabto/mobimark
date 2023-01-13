import React, { useCallback, useEffect, useState } from "react";
import Header from "../components/Header";

function Cadastrar() {
    const turnos = ['Manhã', 'Tarde', 'Noite', 'Integral']
    const [shift, setShift] = useState([]);
    const [schoolName, setSchoolName] = useState();
    const [principalName, setPrincipalName] = useState();
    const [zone, setZone] = useState('Urbano');
    const [disabled, setDisabled] = useState(true);
    let newArray = shift;

    const checkDisabled = useCallback(() => {
        if (shift.length !== 0 && schoolName && zone) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [shift, schoolName, zone])

    const handleClick = (e) => {
        e.preventDefault();
        const storage = JSON.parse(localStorage.getItem('school')) || [];
        const newStorage = {
            nome: {schoolName},
            diretor: {principalName},
            localizacao: {zone},
            turnos: {zone},
        }
        storage.push(newStorage);
        localStorage.setItem('school', JSON.stringify(newStorage));
    }
    

    const handleShift = (name) => {
        if (!newArray.includes(name)) {
            newArray.push(name);
            setShift(newArray)
        } else {
            const removed = newArray.filter((item) => item !== name)
            setShift(removed);
        }
        checkDisabled();
    }

    useEffect(() => {
        checkDisabled();
    }, [shift, schoolName, zone, checkDisabled])

    return (
        <div>
            <Header />
            <div>
                <h1>Cadastrar Nova Escola</h1>
                <form>

                    <label htmlFor="school-name">
                            <span>Nome da escola:</span>
                            <input
                                id="school-name"
                                name="school-name"
                                onChange={({ target: { value } }) => setSchoolName(value)}
                                value={schoolName}
                                onClick={ checkDisabled }
                            />
                    </label>

                    <label htmlFor="principal-name">
                            <span>Nome do diretor:</span>
                            <input
                                id="principal-name"
                                name="principal-name"
                                onChange={({ target: { value } }) => setPrincipalName(value)}
                                value={principalName}
                                onClick={ checkDisabled }
                            />
                    </label>

                    <label htmlFor="state-input">
                            <span>Localização</span>
                            <select
                                id="state-input"
                                name="state-input"
                                onChange={({ target: { value } }) => setZone(value)}
                                onClick={ checkDisabled }
                                value={zone}
                            >
                                <option>Urbano</option>
                                <option>Rural</option>
                            </select>

                    </label>

                    <span>Turno:</span>
                    { turnos.map(Shift => (
                        <label htmlFor={Shift}>
                            <span>{Shift}</span>
                                <input
                                    id={Shift}
                                    name={Shift}
                                    type="checkbox"
                                    onClick={({ target: { name } }) => handleShift(name)}
                                />
                        </label>
                    ))}

                    <button 
                        onClick={ handleClick }
                        disabled={disabled}
                    >
                        Cadastrar
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Cadastrar;