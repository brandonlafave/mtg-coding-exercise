import { handleChange } from './fieldUtils';

describe('handleChange Tests', () => {
    it('should trigger a callback when passed to the function', () => {
        const mockCallBack = jest.fn();
        handleChange({ target: 'inputField'}, mockCallBack)

        expect(mockCallBack).toHaveBeenCalled();
    });

    it('should not trigger anything if the callback is not passed', () => {
        expect(handleChange('string', undefined)).toEqual(undefined);
    });
});
