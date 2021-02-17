const API = 'https://rickandmortyapi.com/api/character/';

const getDAta = async (id) => {
    const apiURL = id ? `${API}${id}` : API;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch error'. error);
    };
};

export default getDAta;