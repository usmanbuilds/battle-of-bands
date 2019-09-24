const assert = require('chai').assert;

const fileParser = require('../src/file-parser');

const mockLine = 'ACDC      3       1';

describe('fileParser function', () => {
    it('extracts a band name', () => {
        const parsedLine = fileParser.parseLine(mockLine);

        assert.equal(parsedLine.bandName, 'ACDC');
    });

    it('calculates the voteDifference', () => {
        const parsedLine = fileParser.parseLine(mockLine);

        assert.equal(parsedLine.voteDifference, 2);
    });
});
