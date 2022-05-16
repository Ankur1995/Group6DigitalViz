//rename, tooltips, buttons

// set the dimensions and margins of the graph
var margin_sun3 = { top: 50, right: 150, bottom: 80, left: 60 },
    width_sun3 = 900 - margin_sun3.left - margin_sun3.right,
    height_sun3 = 600 - margin_sun3.top - margin_sun3.bottom;
    
// append the svg object to the body of the page
var svg3_sun3 = d3.select("#viz_3")
    .append("svg")
    .attr("width", width_sun3 + margin_sun3.left + margin_sun3.right)
    .attr("height", height_sun3 + margin_sun3.top + margin_sun3.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin_sun3.left + "," + margin_sun3.top + ")");

function plot3() {

    // Add Chart Title
    svg3_sun3.append("text")
        .attr("text-anchor", "middle")
        .attr("x", width_sun3 / 2)
        .attr("y", margin_sun3.top - 70)
        .style("font-size", "24px")
        .text("Renewable Per Unit Fossil Fuel Consumption");

    // Prepare X-axis date format range 
    var x = d3.scaleTime()
        .domain(d3.extent(filtered, function (d) { return d.Year; }))
        .range([0, width_sun3]); // unit: pixels
    console.log(filtered)

    // Add X-axis 
    svg3_sun3.append("g")
        .attr("transform", "translate(0," + height_sun3 + ")")
        .call(d3.axisBottom(x))

    // Add X axis label:
    svg3_sun3.append("text")
        .attr("text-anchor", "end")
        .attr("x", width_sun3)
        .attr("y", height_sun3 + margin_sun3.top)
        .text("Year →");

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 45 + d3.max(filtered, function (d) { return d.Greenhouse_Gas_Emissions })]) // unit: 
        .range([height_sun3, 0]);  // unit: pixels
    svg3_sun3.append("g")
        .call(d3.axisLeft(y))

    // Add Y axis label:
    svg3_sun3.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin_sun3.left + 20)
        .attr("x", -margin_sun3.top + 40)
        .text("Renewable Consumption Per Unit Primary Energy Consumption →")

    // Add legend symbols
    svg3_sun3.selectAll("mydots")
        .data(res)
        .enter()
        .append("circle")
        .attr("cx", 700)
        .attr("cy", function (d, i) { return 25 + i * 25 }) // where the first dot appears, distance between dots
        .attr("r", 7)
        .style("fill", function (d) { return color(d) })

    // Add legend labels
    svg3_sun3.selectAll("mylabels")
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
    svg3_sun3.selectAll(".line")
        .data(sumstat)
        .enter()
        .append("path")
        .attr("fill", "none")
        .attr("stroke", function (d) { return color(d.key) })
        .attr("stroke-width", 2)
        .attr("d", function (d) {
            return d3.line()
                .x(function (d) { return x(d.Year); })
                .y(function (d) { return y(d.Greenhouse_Gas_Emissions); })
                (d.values)
        })

    // Add the points
    svg3_sun3
        //  enter in a group
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
        .attr("cy", function (d) { return y(d.Greenhouse_Gas_Emissions) })
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
    svg3_sun3.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .attr("color", "WhiteSmoke")
        .call(make_x_gridlines()
            .tickSize(-height)
            .tickFormat("")
        )

    // add the Y gridlines
    svg3_sun3.append("g")
        .attr("class", "grid")
        .call(make_y_gridlines()
            .tickSize(-width)
            .tickFormat("")
        )
}