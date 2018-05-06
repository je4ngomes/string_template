const assert = require('assert');
const { template } = require('../string_template');


describe("String Template", () => {

    it('must return string formated', () => {

        const string = '4 * 4 is equal to ${4 * 4}';
        
        assert.equal(template.format(string), '4 * 4 is equal to 16');

    });

    it('must format all patterns', () => {
        const x = 1;
        const string = 'Hello ${(() => "World")()} ${x}';

        assert.equal(template.format(string, { x }), 'Hello World 1');
    });

});