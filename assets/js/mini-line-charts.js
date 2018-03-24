var height = 55,
    width = 200;

var lineChartCanvas = d3.selectAll(".ticker-block__line-chart")
		.append("svg")
		.attr("height", height)
		.attr("width", width);

var lineData = [23,55,41,18,39,53,67,46,30,23,29,36,50];

// Domain Scale
var xScale = d3.scaleLinear()
    .domain([0, lineData.length])
    .range([0, width]);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(lineData, function(d){
        return d;
    })])
    .range([height+2, 0]);

// line mapping
var lineFunction = d3.line()
    .x(function(d, i){ return xScale(i); })
    .y(function(d,i){ return yScale(d); });

// applying line to canvas
lineChartCanvas.append("path")
    .attr("d", lineFunction(lineData))
    .attr("fill", "none")
    .attr('stroke-width', 3)
    .attr("stroke", "white");