import React, { useCallback, useEffect, useState } from "react";
import AddSchoolForm from "../components/AddSchoolForm";
import Header from "../components/Header";
import NewSchoolCard from "../components/NewSchoolCard";
import styles from '../css/Cadastrar.module.css';

function Cadastrar() {
    const [shift, setShift] = useState([]);
    const [schoolName, setSchoolName] = useState();
    const [principalName, setPrincipalName] = useState();
    const [zone, setZone] = useState('Urbano');
    const [disabled, setDisabled] = useState(true);
    const [showTable, setShowTable] = useState(false);
    const [schoolStorage, setSchoolStorage] = useState();

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
            nome: schoolName,
            diretor: principalName,
            localizacao: zone,
            turnos: shift,
        }
        storage.push(newStorage);
        localStorage.setItem('school', JSON.stringify(storage));
        window.dispatchEvent(new Event("storage"));
        setSchoolStorage(storage);
        setShowTable(true);
        setSchoolName('');
        setPrincipalName('');
    }

    const handleShift = (name) => {
        if (!shift.includes(name)) {
            setShift([...shift, name]);
        } else {
            setShift(shift.filter((item) => item !== name))
        }
        checkDisabled();
    }

    useEffect(() => {
        checkDisabled();
    }, [shift, schoolName, zone, checkDisabled]);

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('school'));
        setSchoolStorage(storage);
        if (storage) setShowTable(true);
    }, []);

    window.addEventListener('storage', () => {
        const storage = JSON.parse(localStorage.getItem('school'));
        setSchoolStorage(storage);
        if (storage) setShowTable(true);
    })

    return (
        <div>
            <Header />
            <div className={styles.cadastrarContainer}>
                <h1>Cadastrar Nova Escola</h1>
                <AddSchoolForm 
                    schoolName={schoolName}
                    checkDisabled={checkDisabled}
                    principalName={principalName}
                    zone={zone}
                    setPrincipalName={setPrincipalName}
                    setSchoolName={setSchoolName}
                    setZone={setZone}
                    handleClick={handleClick}
                    handleShift={handleShift}
                    disabled={disabled}
                />

            </div>
            {showTable && <NewSchoolCard schools={schoolStorage} />}
        </div>
    )
}

export default Cadastrar;