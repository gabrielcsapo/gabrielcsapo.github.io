var margin = {
    top: 45,
    right: 50,
    bottom: 65,
    left: 50
};
var width = 400;
var height = 300;

var data = [
    [{
        axis: "Work",
        value: 0.30
    }, {
        axis: "Programming",
        value: 0.35
    }, {
        axis: "Travel",
        value: 0.25
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

var hashChanged = function() {
    var hash = location.hash.slice(1);
    if(hash == "posts") {
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    } else if (hash == "top") {
        $("html, body").animate({ scrollTop: 2 }, "slow", function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        });
    }
}

$(window).on('hashchange',function(){ 
    hashChanged();
});

hashChanged();