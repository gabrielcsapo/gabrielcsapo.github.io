/**
* Usage
* node scripts/build_graph.js > public/graph.json
**/
var graph = {
    nodes: [],
    links: []
};

function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var sources = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
var higher_bound = getRandomInt(10, 100);
for (var i = 0; i < sources.length; i++) {
    graph.nodes.push({
        "name": "",
        "group": getRandomInt(0, higher_bound)
    });
}

sources.forEach(function(s, i) {
    if (sources[i - 1] !== undefined && s !== undefined) {
        graph.links.push({
            "source": s,
            "target": sources[i - 1],
            "value": getRandomInt(0, higher_bound)
        });
        graph.links.push({
            "source": s,
            "target": sources[i],
            "value": getRandomInt(0, higher_bound)
        });
    }
});

console.log(JSON.stringify(graph));
