// try and combine both jQuery and D3js

function drawAreaChart(color){
    var areaChartData = [11,12,8,12,23]

    var areaChartText = {
        price: "£310,394,685",
        campaigns: 12,
        percentage: 50
    }
    width = parseInt(d3.select('.areachart__graph').style('width'), 10);
    height = 260;

    var areaChartCanvas = d3.selectAll(".areachart__graph--" + color)
        .append("svg")
        .attr("class", "areachart__svg")
        .attr("height", height)
        .attr("width", width);
// Lets create our scale
    var yScale = d3.scaleLinear()
        .domain([0,d3.max(areaChartData, function(d){
            return d;
        })])
        .range([height, 0]);

    var xScale = d3.scaleLinear()
        .domain([0, 4])
        .range([0, width]);

// No axis is required

// Map the data to the area chart
    var areaChart = d3.area()
        .x(function(d,i) { return xScale(i); })
        .y1(function(d) { return yScale(d); })
        .y0(height);

    areaChartCanvas.append("path")
        .data([areaChartData])
        .attr("d", areaChart)
        .attr("class", "areachart__fill--" + color);

    areaChartCanvas.append("text")
        .text(areaChartText.price)
        .attr('x', width/2)
        .attr('y', height - 40)
        .attr('text-anchor', 'middle')
        .attr('class', 'size-h1')
        .attr('fill', 'rgba(255,255,255, 0.5)')
        .attr('fill', '#FFF');

    areaChartCanvas.append("text")
        .text("Using " + areaChartText.campaigns + " Campaigns")
        .attr('x', width/2)
        .attr('y', height - 30)
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'hanging')
        .attr('class', 'size-p')
        .attr('fill', 'rgba(255,255,255, 0.5)');
}

drawAreaChart("red");
drawAreaChart("blue");