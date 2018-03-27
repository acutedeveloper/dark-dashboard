var lineData = [23, 55, 41, 18, 39, 23, 53, 30, 67, 46, 50, 29, 36, 50, 23,];

var height = 55,
    width = parseInt(d3.select('.ticker-block__line-chart').style('width'), 10);

var lineChartCanvas = d3.selectAll(".ticker-block__line-chart")
    .append("svg")
    .attr("height", height)
    .attr("width", width);

// Domain Scale
var xScale = d3.scaleLinear()
    .domain([0, lineData.length])
    .range([1, width]);


var yScale = d3.scaleLinear()
    .domain([0, d3.max(lineData, function (d) {
        return d + 5;
    })])
    .range([height + 2, 0]);

// line mapping
var lineFunction = d3.line()
    .x(function (d, i) { return xScale(i); })
    .y(function (d, i) { return yScale(d); });

// applying line to canvas
var path = lineChartCanvas.append("path")
    .attr('d', lineFunction(lineData))
    .attr("fill", "none")
    .attr('stroke-width', 3)
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr("stroke", "#118DA9");

//---------



function miniLineChart() {


    lineChartCanvas;

    xScale.range([1, width]);

    lineFunction
        .x(function (d, i) { return xScale(i); })
        .y(function (d, i) { return yScale(d); });

    path.attr('d', lineFunction(lineData));

}

// miniLineChart();
//
//
// // Create the listener function
// var updateLayout = debounce(function(e) {
//
//     miniLineChart();
//     // Does all the layout updating here
//     console.log('The viewport width is: ' + window.innerWidth);
//
// }, 500); // Maximum run of once per 500 milliseconds
//
// //Add the event listener
// window.addEventListener("resize", updateLayout, false);