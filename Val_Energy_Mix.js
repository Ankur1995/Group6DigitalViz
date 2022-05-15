var margin = {top: 110, right: 30, bottom: 90, left: 40},
    width = 900 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

// append the svg_energy_mix object to the body of the page
var svg_energy_mix = d3.select("#energy_mix")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("uk-energy-breakdown.csv", function(data) {

  // List of groups = header of the csv files
  var keys = data.columns.slice(1)

  // Add X axis
  var x = d3.scaleLinear()
    .range([ 0, width ])
    .domain(d3.extent(data, function(d) { return d.Year; }));
  svg_energy_mix.append("g")
    .attr("transform", "translate(0," + height + ")")
    .attr("class", "grid")
    .call(d3.axisBottom(x).tickSize(-height*1).tickValues([1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020]).tickFormat(d3.format('d')))
    .style("font-size",14);
    
  // Customization
  svg_energy_mix.selectAll(".tick line").attr("class", "grid")

  // Add X axis label:
  svg_energy_mix.append("text")
      .attr("text-anchor", "end")
      .attr("class", "plot-legend")
      .attr("x", width)
      .attr("y", height + margin.bottom/2 )
      .text("Time (year)");

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([-2300, 2300])
    .range([ height, 0 ]);

  // color palette
  var color = d3.scaleOrdinal()
    .domain(keys)
    .range(d3.schemeSet2);

  //stack the data?
  var stackedData = d3.stack()
    .offset(d3.stackOffsetSilhouette)
    .keys(keys)
    (data)

  // create a tooltip
  var Tooltip = svg_energy_mix
    .append("text")
    .attr("x", 0)
    .attr("y", -15)
    .style("opacity", 0)
    .style("font-size", "12px")

  // Three function that change the tooltip when user hover / move / leave a cell
  var mouseover = function(d) {
    Tooltip.style("opacity", 1)
    d3.selectAll(".myArea").style("opacity", .6)
    d3.select(this)
      .style("opacity", 1)
  }
  var mousemove = function(d,i) {
    grp = keys[i]
    Tooltip.text(grp)
  }
  var mouseleave = function(d) {
    Tooltip.style("opacity", 0)
    d3.selectAll(".myArea").style("opacity", 1)
   }

  // Area generator
  var area = d3.area()
    .x(function(d) { return x(d.data.Year); })
    .y0(function(d) { return y(d[0]); })
    .y1(function(d) { return y(d[1]); })

  // Show the areas
  svg_energy_mix
    .selectAll("mylayers")
    .data(stackedData)
    .enter()
    .append("path")
      .attr("class", "myArea")
      .style("fill", function(d) { return color(d.key); })
      .attr("d", area)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)

    // Plot title
    svg_energy_mix.append("text")
    .attr("x", width/2)
    .attr("y", margin.top - 190)
    .attr("text-anchor", "middle")
    .attr("class", "plot-title")
    .text("Energy breakdown: the relative proportions of energy sources in the energy mix, 1965-2020");
    
    // Handmade legend
        svg_energy_mix.append("circle").attr("cx",0).attr("cy", margin.top - 150).attr("r", 6).style("fill", "#66c2a6")
        svg_energy_mix.append("circle").attr("cx",120).attr("cy", margin.top - 150).attr("r", 6).style("fill", "#b3b3b3")
        svg_energy_mix.append("circle").attr("cx",175).attr("cy", margin.top - 150).attr("r", 6).style("fill", "#e5c594")
        svg_energy_mix.append("circle").attr("cx",245).attr("cy", margin.top - 150).attr("r", 6).style("fill", "#ffd92f")
        svg_energy_mix.append("circle").attr("cx",310).attr("cy", margin.top - 150).attr("r", 6).style("fill", "#a6d954")
        svg_energy_mix.append("circle").attr("cx",400).attr("cy", margin.top - 150).attr("r", 6).style("fill", "#e185bd")
        svg_energy_mix.append("circle").attr("cx",480).attr("cy", margin.top - 150).attr("r", 6).style("fill", "#8da0cc")
        svg_energy_mix.append("circle").attr("cx",555).attr("cy", margin.top - 150).attr("r", 6).style("fill", "#f3885e")
        svg_energy_mix.append("circle").attr("cx",630).attr("cy", margin.top - 150).attr("r", 6).style("fill", "#66c0a5")
        svg_energy_mix.append("text").attr("x", 15).attr("y", margin.top - 150).text("Geo Biomass").style("font-size", "15px").attr("alignment-baseline","middle")
        svg_energy_mix.append("text").attr("x", 135).attr("y", margin.top - 150).text("Oil").style("font-size", "15px").attr("alignment-baseline","middle")
        svg_energy_mix.append("text").attr("x", 190).attr("y", margin.top - 150).text("Coal").style("font-size", "15px").attr("alignment-baseline","middle")
        svg_energy_mix.append("text").attr("x", 260).attr("y", margin.top - 150).text("Gas").style("font-size", "15px").attr("alignment-baseline","middle")
        svg_energy_mix.append("text").attr("x", 325).attr("y", margin.top - 150).text("Nuclear").style("font-size", "15px").attr("alignment-baseline","middle")
        svg_energy_mix.append("text").attr("x", 415).attr("y", margin.top - 150).text("Hydro").style("font-size", "15px").attr("alignment-baseline","middle")
        svg_energy_mix.append("text").attr("x", 495).attr("y", margin.top - 150).text("Wind").style("font-size", "15px").attr("alignment-baseline","middle")
        svg_energy_mix.append("text").attr("x", 570).attr("y", margin.top - 150).text("Solar").style("font-size", "15px").attr("alignment-baseline","middle")
        svg_energy_mix.append("text").attr("x", 645).attr("y", margin.top - 150).text("Biofuels").style("font-size", "15px").attr("alignment-baseline","middle")

    
    // Source text
    svg_energy_mix.append("text")
    .attr("x", 0)
    .attr("y", height + margin.bottom/2)
    .attr("text-anchor", "left")
    .attr("class", "plot-legend")
    .text("Source: Statistical Review of World Energy, BP");

    
})