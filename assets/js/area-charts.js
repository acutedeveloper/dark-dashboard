// try and combine both jQuery and D3js
var areaChartData = [11,12,8,12,23]

width = parseInt(d3.select('.areachart__graph').style('width'), 10);
height = 260;

var areaChartCanvas = d3.selectAll(".areachart__graph")
    .append("svg")
    .attr("height", height)
    .attr("width", width);

areaChartCanvas.append("text")
    .text("Using boobs Campaigns")
    .attr('x', width/2)
    .attr('y', height - 35)
    .attr('text-anchor', 'middle')
    .attr('class', 'size-p')
    .attr('fill', '#FFF');

// Lets create our scale
var yScale = d3.scaleLinear()
    .domain([0, d3.max(areaChartData, function(d){
        return d;
    })])
    .range([height, 0]);

var xScale = d3.scaleLinear()
    .domain([0, 5])
    .range([0, width]);

// No axis is required

// Map the data to the area chart
var areaChart = d3.area()
    .x(function(d,i) { return xScale(i); })
    .y1(function(d) { return yScale(d); });

// Think about a order for creating your charts
// 1 Create the canvas
// 2 Add the scale
// 4 Lets add a line :)
// 3 Map the data to svg elements


// Second add the line to the charset
// Because we have use the svg.line function to interpolate the data
// We do no need to use the data() & enter() functions??
areaChartCanvas.append("path")
    .data([areaChartData])
    .attr("d", areaChart)
    .attr('stroke-width', 3)
    .attr("fill", "red")
    .attr("stroke", "#FFF");
