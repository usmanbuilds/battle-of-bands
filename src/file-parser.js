exports.parseLine = function(line) {
    const sanitizedLine = line.split(' ').filter(el => el !== '');
    const voteDifference = sanitizedLine[1] - sanitizedLine[2];

    return {
        bandName: sanitizedLine[0],
        voteDifference
    };
};
