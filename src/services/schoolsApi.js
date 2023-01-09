// listar todas as cidades do estado; retorna id e nome dos municipios
export const getCitiesByState = async (uf) => {
    const data = await fetch(`https://cors-anywhere.herokuapp.com/http://educacao.dadosabertosbr.com/api/cidades/${uf}`);
    const response = await data.json();
    return response;
}

// listar todas as escolas do municipio; retorna todos os dados das escolas
export const getSchoolsByCity = async (cityId) => {
    const data = await fetch(`https://cors-anywhere.herokuapp.com/http://educacao.dadosabertosbr.com/api/escolas/buscaavancada?cidade=${cityId}`);
    const response = await data.json();
    return response;
}

// pesquisar escolas por nome; retorna todos as escolas que contenham o nome pesquisado
export const getSchoolByName = async (schoolName) => {
    const data = await fetch(`https://cors-anywhere.herokuapp.com/http://educacao.dadosabertosbr.com/api/escolas?nome=${schoolName}`);
    const response = await data.json();
    return response;
}