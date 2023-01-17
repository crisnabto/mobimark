import React, { useEffect, useState } from "react";
import styles from '../css/NewSchoolCard.module.css';

function NewSchoolCard (props) {
    const [schoolsToShow, setSchoolsToShow] = useState(props.schools);

    useEffect(() => {
        window.addEventListener('storage', () => {
            setSchoolsToShow(JSON.parse(localStorage.getItem('school')));
        });
    }, []);

    const handleDelete = (schoolToDelete) => {
        const newStorage = schoolsToShow.filter(school => school.nome !== schoolToDelete.nome);
        localStorage.setItem('school', JSON.stringify(newStorage));
        window.dispatchEvent(new Event("storage"));
    }

    return (
        <div className={ styles.newSchool }>
            <h1>Escolas Cadastradas</h1>
            { schoolsToShow.length === 0 ? <p>Nenhuma escola cadastrada</p> : (
                <div>
                    { schoolsToShow.map((school, key) => (
                        <div key={key} className={styles.tableContent}>
                            <table className={ styles.newTableStyle }>
                                <thead>
                                    <tr>
                                        <th className={ styles.codeField }>Nome da Escola</th>
                                        <th className={ styles.codeField }>Diretor</th>
                                        <th className={ styles.codeField }>Localização</th>
                                        <th className={ styles.codeField }>Turnos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{school.nome}</td>
                                        <td>{school.diretor}</td>
                                        <td>{school.localizacao}</td>
                                        <td>{school.turnos.map((turno, key) => <p key={key}>{turno}</p>)}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button onClick={ () => handleDelete(school) }>Excluir</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default NewSchoolCard;