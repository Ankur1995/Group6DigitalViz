// append the svg object to the body of the page
var svg2 = d3.select("#viz_2")
.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
.append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


function plot2() {

    // Add Chart Title
    svg2.append("text")
        .attr("text-anchor", "middle")
        .attr("x", width / 2)
        .attr("y", margin.top - 70)
        .style("font-size", "24px")
        .text("Renewable Per Unit Fossil Fuel Consumption");

    // Add X-axis 
    svg2.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))

    // Add X axis label:
    svg2.append("text")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", height + margin.top)
        .text("Year →");

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(filtered, function (d) { return d.Renewables_Per_Fossils })]) // unit: 
        .range([height, 0]);  // unit: pixels
    svg2.append("g")
        .call(d3.axisLeft(y))

    // Add Y axis label:
    svg2.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left + 20)
        .attr("x", -margin.top + 40)
        .text("Renewable Consumption Per Unit Primary Energy Consumption →")

    // Add legend symbols
    svg2.selectAll("mydots")
        .data(res)
        .enter()
        .append("circle")
        .attr("cx", 700)
        .attr("cy", function (d, i) { return 25 + i * 25 }) // where the first dot appears, distance between dots
        .attr("r", 7)
        .style("fill", function (d) { return color(d) })

    // Add legend labels
    svg2.selectAll("mylabels")
        .data(res)
        .enter()
        .append("text")
        .attr("x", 720)
        .attr("y", function (d, i) { return 25 + i * 25 }) // where the first dot appears, distance between dots
        .style("fill", function (d) { return color(d) })
        .text(function (d) { return d })
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle")

    // Draw the lines
    svg2.selectAll(".line")
        .data(sumstat)
        .enter()
        .append("path")
        .attr("fill", "none")
        .attr("stroke", function (d) { return color(d.key) })
        .attr("stroke-width", 1.5)
        .attr("d", function (d) {
            return d3.line()
                .x(function (d) { return x(d.Year); })
                .y(function (d) { return y(d.Renewables_Per_Fossils); })
                (d.values)
        })

}