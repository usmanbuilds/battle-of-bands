const fileReader = require('./file-reader');
const fileParser = require('./file-parser');

const bandVotesDataPath = __dirname + '/band-votes.txt';

let results = [];

const onLine = line => {
    if (line.includes('BandName')) return;

    const result = fileParser.parseLine(line);

    results.push(result);
};

const onClose = () => {
    results.sort((a, b) => b.voteDifference - a.voteDifference);

    console.log(`${results[0].bandName} has the greatest positive difference with a score of ${results[0].voteDifference}`)
};

fileReader.readFile(bandVotesDataPath, onLine, onClose);
