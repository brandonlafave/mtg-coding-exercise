import safeDefaults from './safeDefaults.js';

/**
 * fetchData - Fetches card data from the API
 * @param {number} pageSize the number of results that should be returned
 * @param {string} orderBy the property the data should be sorted by
 * @param {string} type the type of card
 * @returns {array} containing card data
 */
function fetchData(pageSize, orderBy, type) {

    pageSize = safeDefaults(pageSize);
    orderBy = safeDefaults(orderBy);
    type = safeDefaults(type);

    const requestHeaders = {
        headers:{
            'accepts':'application/json',
            'Content-Type': 'application/json'
        }
    };
    const baseUrl = 'https://api.magicthegathering.io/v1/cards'
    const requestParams = `?pageSize=${pageSize}&orderBy=${orderBy}&type=${type}`;
    const requestUrl = `${baseUrl}${requestParams}`;

    return fetch(requestUrl, requestHeaders)
    .then(response => response.json())
    .then(response => {
        return response.cards;
    })
    .catch(error => {
        return error;
    });
}

export default fetchData;