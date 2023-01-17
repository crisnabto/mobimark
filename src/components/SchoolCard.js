import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/SchoolCard.module.css';

function SchoolCard(props) {
    const { school } = props;
    return (
        <table className={ styles.tableStyle }>
            <thead>
                <tr>
                    <th className={ styles.codeField }>Código</th>
                    <th className={ styles.nameField }>Nome da Escola</th>
                    <th className={ styles.codeField }>UF</th>
                    <th>Município</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{school.cod}</td>
                    <td>{school.nome}</td>
                    <td>{school.estado}</td>
                    <td>{school.cidade}</td>
                </tr>
            </tbody>
        </table>
    )
}

SchoolCard.propTypes = {
    school: PropTypes.shape([]),
    index: PropTypes.number,
};

export default SchoolCard;