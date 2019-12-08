import safeDefaults from './safeDefaults';

describe('safeDefaults Tests', () => {
    it('should return an empty string if the passed property is falsey and no override is passed', () => {
        expect(safeDefaults(undefined)).toEqual('');
    });

    it('should return the property if the property is truthy', () => {
        expect(safeDefaults('Test property')).toEqual('Test property');
    });

    it('should return the override value if an override is passed and the primary property is falsey', () => {
        expect(safeDefaults(undefined, 'Sample override')).toEqual('Sample override');
    });
});
