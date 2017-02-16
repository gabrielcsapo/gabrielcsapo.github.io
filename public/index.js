var d3 = require('d3');

var generateGraph = function(width) {
    var nodes = [];
    var links = [];
    var numberOfNodes = parseInt(width * 0.19) > 200 ? 200 : parseInt(width * 0.19);
    var numberOfGroups = parseInt(width * 0.008) > 15 ? 15 : parseInt(width * 0.008);

    for (var n = 0; n < numberOfNodes; n++) {
        nodes.push({
            id: n,
            group: Math.floor(Math.random() * numberOfGroups),
            r: Math.floor(Math.random() * 5)
        });
    }

    for (var i = 0; i < nodes.length; i++) {
        var many = nodes[i].group * 0.75;
        while (many > 0) {
            links.push({
                source: nodes[i].id,
                target: nodes[Math.floor(Math.random() * nodes.length)].id
            });
            many -= 1;
        }
    }

    return {
        nodes: nodes,
        links: links
    };
}

document.addEventListener("DOMContentLoaded", function() {
    var fullScreen = document.querySelectorAll('.full-screen');
    [].forEach.call(fullScreen, function(div) {
      div.setAttribute("style", "position:relative;height:" + window.innerHeight + 'px;');
    });

    var width = window.innerWidth - 50;
    var height = window.innerHeight / 1.15;
    var svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height);
    var color = d3.scaleOrdinal(d3.schemeCategory20);
    var graph = generateGraph(width);

    var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) {
            return d.id;
        }))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));

    var link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line")
        .attr("stroke-width", function(d) {
            return Math.sqrt(d.value);
        });

    var node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("r", function(d) {
            return d.r;
        })
        .attr("fill", function(d) {
            return color(d.group);
        })
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    node.append("title")
        .text(function(d) {
            return d.id;
        });

    simulation
        .nodes(graph.nodes)
        .on("tick", ticked);

    simulation.force("link")
        .links(graph.links);

    function ticked() {
        link
            .attr("x1", function(d) {
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

        node
            .attr("cx", function(d) {
                return d.x;
            })
            .attr("cy", function(d) {
                return d.y;
            });
    }

    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
});
