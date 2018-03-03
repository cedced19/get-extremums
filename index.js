module.exports = function (data, value) {
    var lowest = Number.POSITIVE_INFINITY;
    var highest = Number.NEGATIVE_INFINITY;
    var tmp;
    for (var i=data.length-1; i>=0; i--) {
        tmp = data[i][value];
        if (tmp < lowest) {
            lowest = tmp;
            lowestKey = i;
        } 
        if (tmp > highest) {
            highest = tmp;
            highestKey = i;
        } 
    }
    return { highest: data[highestKey], lowest: data[lowestKey] };
}