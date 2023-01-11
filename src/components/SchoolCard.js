import React from 'react';
import PropTypes from 'prop-types';

function SchoolCard(props) {
    const { school } = props;
    return (
        <table>
            <tr>
                <td>Codigo</td>
                <td>Nome</td>
            </tr>
            <tr>
                <td>{school.cod}</td>
                <td>{school.nome}</td>
            </tr>
            <tr>
                <td>UF</td>
                <td>Município</td>
            </tr>
            <tr>
                <td>{school.estado}</td>
                <td>{school.cidade}</td>
            </tr>
        </table>
    )
}

SchoolCard.propTypes = {
    school: PropTypes.shape([]),
    index: PropTypes.number,
};

export default SchoolCard;