// set the dimensions and margins of the graph
var margin = { top: 50, right: 150, bottom: 80, left: 60 },
    width = 900 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg1 = d3.select("#viz_1")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

function plot1() {

    // Add Chart Title
    svg1.append("text")
        .attr("text-anchor", "middle")
        .attr("x", width / 2)
        .attr("y", margin.top - 70)
        .style("font-size", "24px")
        .style("font", "Lato")
        .text("Decoupling Economic Growth and Energy Use");

    // Add X-axis 
    svg1.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))

    // Add X axis label:
    svg1.append("text")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", height + margin.top)
        .text("Year →");

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(filtered, function (d) { return d.Energy_Per_GDP })]) // unit: 
        .range([height, 0])  // unit: pixels
    svg1.append("g")
        .call(d3.axisLeft(y))


    // Add Y axis label:
    svg1.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left + 20)
        .attr("x", -margin.top + 40)
        .text("Energy Consumption Per Unit GDP →")

    /*
    // Add legend symbols
    svg1.selectAll("mydots")
        .data(res)
        .enter()
        .append("circle")
        .attr("cx", 700)
        .attr("cy", function (d, i) { return 25 + i * 25 }) // where the first dot appears, distance between dots
        .attr("r", 7)
        .style("fill", function (d) { return color(d) }) */
    //console.log(sumstat)
    //console.log(sumstat[2].values[sumstat[2].values.length - 1].Year)
    //console.log(sumstat[2].values[sumstat[2].values.length - 1].Energy_Per_GDP)

    // Add legend labels
    svg1.selectAll("mylabels")
        .data(sumstat)//res)
        .enter()
        .append("text")
        .datum(function (d) {
            return {
                label: d.key,
                height: d.values[d.values.length - 1], // keep only the last value of each time series
            };
        })
        .attr("transform", function (d) { return "translate(" + x(d.height.Year) + "," + y(d.height.Energy_Per_GDP) + ")"; }) // Put the text at the position of the last point
        .attr("x", 10)
        //.attr("y", function (d, i) { return 25 + i * 25 }) // where the first dot appears, distance between dots
        .style("fill", function (d) { return color(d.label) }) //return d
        .text(function (d) { return d.label }) //return d
    //.attr("text-anchor", "left")
    //.style("alignment-baseline", "middle")

    // Draw the lines
    svg1.selectAll(".line")
        .data(sumstat)
        .enter()
        .append("path")
        .attr("fill", "none")
        .attr("stroke", function (d) { return color(d.key) })
        .attr("stroke-width", 2)
        .attr("d", function (d) {
            return d3.line()
                .x(function (d) { return x(d.Year); })
                .y(function (d) { return y(d.Energy_Per_GDP); })
                (d.values)
        })


    // Add the points
    svg1
        // First we need to enter in a group
        .selectAll("myDots")
        .data(sumstat)
        .enter()
        .append('g')
        .style("fill", function (d) { return color(d.key) })
        // Second we need to enter in the 'values' part of this group
        .selectAll("myPoints")
        .data(function (d) { return d.values })
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(d.Year) })
        .attr("cy", function (d) { return y(d.Energy_Per_GDP) })
        .attr("r", 2)
        .attr("stroke", "white")

    // gridlines in x axis function
    function make_x_gridlines() {
        return d3.axisBottom(x)
            .ticks(10)
    }

    // gridlines in y axis function
    function make_y_gridlines() {
        return d3.axisLeft(y)
            .ticks(6)
    }

    // add the X gridlines
    svg1.append("g")
        .attr("class", "grid")
        //.attr("stroke-opacity", 0.2)
        //.attr("shape-rendering", 'crispEdges')
        //.attr("stroke-width", 1.3) 
        .attr("transform", "translate(0," + height + ")")
        .call(make_x_gridlines()
            .tickSize(-height)
            .tickFormat("")


        )

    // add the Y gridlines
    svg1.append("g")
        .attr("class", "grid")
        //.attr("stroke-opacity", 0.2)
        //.attr("shape-rendering", 'crispEdges')
        //.attr("stroke-width", 1.3) 
        .call(make_y_gridlines()
            .tickSize(-width)
            .tickFormat("")
        )

}


