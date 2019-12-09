import safeDefaults from './safeDefaults.js';

/**
 * loopThroughDefaults - Checks if properties within an object exist, and if not, defaults to an empty string
 * @param {object} object An object containing properties that need to be looped through and checked for defaults
 * @returns {object} An object containing safe default values
 */
const loopThroughDefaults = (object) => {
    for (var key of Object.keys(object)) {
        object[key] = safeDefaults(object[key]);
    }

    return object;
}

/**
 * fetchData - Fetches card data from the API
 * @param {object} paramObject An object containing the request parameters
 * @returns {array} containing card data
 */
const fetchData = (paramObject) => {

    let safeParams = loopThroughDefaults(paramObject);

    const requestHeaders = {
        headers:{
            'accepts':'application/json',
            'Content-Type': 'application/json'
        }
    };
    const baseUrl = 'https://api.magicthegathering.io/v1/cards'
    const requestParams = `?pageSize=${safeParams.pageSize}&orderBy=${safeParams.orderBy}&type=${safeParams.type}&page=${safeParams.page}`;
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