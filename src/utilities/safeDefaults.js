/**
 * safeDefaults - Checks if property exists, and if not, defaults to an empty string
 * @param {string} property the property to be checked
 * @param {string} defaultValue the value that replaces the default empty string
 * @returns {string} containing the property value if it exists or an empty string if it doesn't
 */
function safeDefaults(property, defaultValue = '') {
    /* TODO: Extend this function to handle nested properties */
    return property ? property : defaultValue;
}

export default safeDefaults;
