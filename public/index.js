var d3 = require('d3');

document.addEventListener("DOMContentLoaded", function(event) {
    var width = document.width,
        height = 500;

    var color = d3.scale.category20();

    var force = d3.layout.force()
        .charge(-50)
        .linkDistance(35)
        .size([width, height]);

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    var graph = {
        nodes: [],
        links: []
    };

    function getRandomInt(max, min) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var sources = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
    var higher_bound = getRandomInt(10, 100);
    for(var i = 0; i < sources.length; i++) {
        graph.nodes.push({
            "name": "",
            "group": getRandomInt(0, higher_bound)
        });
    }

    sources.forEach(function(s, i) {
        if(sources[i - 1] !== undefined && s !== undefined) {
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

    force
        .nodes(graph.nodes)
        .links(graph.links)
        .start();

    var link = svg.selectAll(".link")
        .data(graph.links)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", function(d) {
            return Math.sqrt(d.value);
        });

    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", 5)
        .style("fill", function(d) {
            return color(d.group);
        })
        .call(force.drag);

    node.append("title")
        .text(function(d) {
            return d.name;
        });

    force.on("tick", function() {
        link.attr("x1", function(d) {
                return d.source.x;
            })
            .attr("y1", function(d) {
                return d.source.y;
            })
            .attr("x2", function(d) {
                return d.target.x;
            })
            .attr("y2", function(d) {
                return d.target.y;
            });

        node.attr("cx", function(d) {
                return d.x;
            })
            .attr("cy", function(d) {
                return d.y;
            });
    });

    setInterval(function() {
        force
            .nodes(graph.nodes)
            .links(graph.links)
            .start();
    }, 1000);
});
