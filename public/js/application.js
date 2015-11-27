var margin = {
    top: 45,
    right: 0,
    bottom: 65,
    left: 0
};
var width = 775;
var height = 300;

var data = [
    [{
        axis: "Life",
        value: 0.20
    }, {
        axis: "Programming",
        value: 0.40
    }, {
        axis: "Travel",
        value: 0.30
    }, {
        axis: "Writing",
        value: 0.10
    }]
];

var color = d3.scale.ordinal()
    .range(["#EDC951", "#CC333F", "#00A0B0"]);

var radarChartOptions = {
    w: width,
    h: height,
    margin: margin,
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    color: color
};

RadarChart('.graph', data, radarChartOptions);
