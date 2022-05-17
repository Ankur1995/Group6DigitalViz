// set the dimensions and margins of the graph
var margin_sun2 = { top: 50, right: 150, bottom: 80, left: 60 },
    width_sun2 = 900 - margin_sun2.left - margin_sun2.right,
    height_sun2 = 600 - margin_sun2.top - margin_sun2.bottom;

// append the svg object to the body of the page
var svg_sun2 = d3.select("#viz_2")
    .append("svg")
    .attr("width", width_sun2 + margin_sun2.left + margin_sun2.right)
    .attr("height", height_sun2 + margin_sun2.top + margin_sun2.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin_sun2.left + "," + margin_sun2.top + ")");

function plot2() {

    // Add Chart Title
    svg_sun2.append("text")
        .attr("text-anchor", "middle")
        .attr("x", width_sun2 / 2)
        .attr("y", margin_sun2.top - 70)
        .style("font-size", "24px")
        .text("Growing Use of Renewables Compared to Fossil Fuels");

    // Prepare X-axis date format range 
    var x = d3.scaleTime()
        .domain(d3.extent(filtered, function (d) { return d.Year; }))
        .range([0, width_sun2]); // unit: pixels

    // Add X-axis 
    svg_sun2.append("g")
        .attr("transform", "translate(0," + height_sun2 + ")")
        .call(d3.axisBottom(x))

    // Add X axis label:
    svg_sun2.append("text")
        .attr("text-anchor", "end")
        .attr("x", width_sun2)
        .attr("y", height_sun2 + margin_sun2.top)
        .text("Year →");

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(filtered, function (d) { return d.Renewables_Per_Fossils })]) // unit: 
        .range([height_sun2, 0]);  // unit: pixels
    svg_sun2.append("g")
        .call(d3.axisLeft(y))

    // Add Y axis label:
    svg_sun2.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin_sun2.left + 20)
        .attr("x", -margin_sun2.top + 40)
        .text("Renewable Consumption Per Unit Fossil Fuel Consumption →")

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
    svg_sun2.selectAll("mylabels")
        .data(sumstat)//res)
        .enter()
        .append("text")
        .datum(function (d) {
            return {
                label: d.key,
                height: d.values[d.values.length - 1], // keep only the last value of each time series
            };
        })
        .attr("transform", function (d) { return "translate(" + x(d.height.Year) + "," + y(d.height.Renewables_Per_Fossils) + ")"; }) // Put the text at the position of the last point
        .attr("x", 10)
        //.attr("y", function (d, i) { return 25 + i * 25 }) // where the first dot appears, distance between dots
        .style("fill", function (d) { return color(d.label) }) //return d
        .text(function (d) { return d.label }) //return d
    //.attr("text-anchor", "left")
    //.style("alignment-baseline", "middle")

    // Draw the lines
    svg_sun2.selectAll(".line")
        .data(sumstat)
        .enter()
        .append("path")
        .attr("fill", "none")
        .attr("stroke", function (d) { return color(d.key) })
        .attr("stroke-width", 2)
        .attr("d", function (d) {
            return d3.line()
                .x(function (d) { return x(d.Year); })
                .y(function (d) { return y(d.Renewables_Per_Fossils); })
                (d.values)
        })

    // Add the points
    svg_sun2
        // enter in a group
        .selectAll("myDots")
        .data(sumstat)
        .enter()
        .append('g')
        .style("fill", "white") //function (d) { return color(d.key) })
        // enter in the 'values' part of this group
        .selectAll("myPoints")
        .data(function (d) { return d.values })
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(d.Year) })
        .attr("cy", function (d) { return y(d.Renewables_Per_Fossils) })
        .attr("r", 2)
        .attr("stroke", function (d) { return color(d.Country) })//"white")

    // gridlines in x axis function
    function make_x_gridlines() {
        return d3.axisBottom(x)
            .ticks(10)
    }

    // gridlines in y axis function
    function make_y_gridlines() {
        return d3.axisLeft(y)
            .ticks(10)
    }

    // add the X gridlines
    svg_sun2.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height_sun2 + ")")
        .attr("color", "WhiteSmoke")
        .call(make_x_gridlines()
            .tickSize(-height_sun2)
            .tickFormat("")
        )

    // add the Y gridlines
    svg_sun2.append("g")
        .attr("class", "grid")
        .call(make_y_gridlines()
            .tickSize(-width_sun2)
            .tickFormat("")
        )






}