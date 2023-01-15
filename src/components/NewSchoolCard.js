import React, { useEffect, useState } from "react";

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
        <div>
            <p>Escolas Cadastradas</p>
            { schoolsToShow.length === 0 ? <p>Nenhuma escola cadastrada</p> : (
                <div>
                    { schoolsToShow.map((school, key) => (
                        <div key={key}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome da Escola</th>
                                        <th>Diretor</th>
                                        <th>Localização</th>
                                        <th>Turnos</th>
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