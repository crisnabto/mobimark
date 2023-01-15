import React from "react";

function AddSchoolForm(props) {
    const turnos = ['Manhã', 'Tarde', 'Noite', 'Integral']
    const {
        schoolName,
        checkDisabled,
        principalName,
        zone,
        setPrincipalName,
        setSchoolName,
        setZone,
        handleClick,
        handleShift,
        disabled
    } = props;

    return (
        <form>

            <label htmlFor="school-name">
                <span>Nome da escola:</span>
                <input
                    id="school-name"
                    name="school-name"
                    onChange={({ target: { value } }) => setSchoolName(value)}
                    value={schoolName}
                    onClick={checkDisabled}
                />
            </label>

            <label htmlFor="principal-name">
                <span>Nome do diretor:</span>
                <input
                    id="principal-name"
                    name="principal-name"
                    onChange={({ target: { value } }) => setPrincipalName(value)}
                    value={principalName}
                    onClick={checkDisabled}
                />
            </label>

            <label htmlFor="state-input">
                <span>Localização</span>
                <select
                    id="state-input"
                    name="state-input"
                    onChange={({ target: { value } }) => setZone(value)}
                    onClick={checkDisabled}
                    value={zone}
                >
                    <option>Urbano</option>
                    <option>Rural</option>
                </select>

            </label>

            <span>Turno:</span>
            {turnos.map((Shift, key) => (
                <label htmlFor={Shift} key={key}>
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
                onClick={handleClick}
                disabled={disabled}
            >
                Cadastrar
            </button>
        </form>
    )
}

export default AddSchoolForm;