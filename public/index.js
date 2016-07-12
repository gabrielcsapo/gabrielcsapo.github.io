var d3 = require('d3');

document.addEventListener("DOMContentLoaded", function(event) {
    var width = window.innerWidth / 2.5;
    var height = window.innerHeight / 1.35;

    var svg = d3.select(".quote-container")
        .append("svg")
        .attr("class", "directed-graph")
        .attr("width", width)
        .attr("height", height);

    var colors = d3.scale.category20();

    var force = d3.layout.force()
        .charge(-50)
        .linkDistance(35)
        .size([width, height]);

    var n = width / 3; // number of nodes
    var m = n / 2; // number of links
    var charge = -50;

    var graph = {};

    graph.nodes = d3.range(n).map(Object);
    var list = randomChoose(unorderedPairs(d3.range(n)), m);
    graph.links = list.map(function(a) {
        return {
            source: a[0],
            target: a[1]
        }
    });

    function randomChoose(s, k) { // returns a random k element subset of s
        var a = [],
            i = -1,
            j;
        while (++i < k) {
            j = Math.floor(Math.random() * s.length);
            a.push(s.splice(j, 1)[0]);
        };
        return a;
    }

    function unorderedPairs(s) { // returns the list of all unordered pairs from s
        var i = -1,
            a = [],
            j;
        while (++i < s.length) {
            j = i;
            while (++j < s.length) a.push([s[i], s[j]])
        };
        return a;
    }

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
            console.log(d);
            return colors(d.group);
        })
        .call(force.drag);

    node.transition().duration(800)
        .attr("r", function(d) {
            return 3 + 3 * d.weight
        })
        .style("fill", function(d) {
            return colors(d.weight)
        });

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
});
