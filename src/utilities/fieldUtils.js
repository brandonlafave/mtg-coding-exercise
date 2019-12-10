/**
 * handleChange - Handles changes made to the field
 * @param {object} e change event object
 * @param {function} callback change callback
 */
export const handleChange = (e, callback) =>{
    if (callback) {
        callback(e);
    }
};

const fieldUtils = {
    handleChange
}

export default fieldUtils