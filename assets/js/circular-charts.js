// try and combine both jQuery and D3js
var circleChartData = {
    price: "£310,394,685",
    campaigns: 12,
    percentage: 50
}

width = parseInt(d3.select('.circularchart__graph').style('width'), 10);
height = 250;

var circleChartCanvas = d3.selectAll(".circularchart__graph")
    .append("svg")
    .attr("height", height)
    .attr("width", width);

circleChartCanvas.append("text")
    .text(circleChartData.price)
    .attr('x', width/2)
    .attr('y', height/2)
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .attr('class', 'size-h4')
    .attr('fill', '#FFF');

circleChartCanvas.append("text")
    .text("Using " + circleChartData.campaigns + " Campaigns")
    .attr('x', width/2)
    .attr('y', height/2)
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .attr('class', 'size-p')
    .attr('fill', '#FFF');

var radius = 100;
var perimiter = Math.PI * 2;

    var donutRadius = function(){
        if(width > height){
            return height/2;
        } else {
            return width/2;
        }
    }

var arc = d3.arc()
    .innerRadius(donutRadius() - 15)
    .outerRadius(donutRadius() - 10)
    .startAngle(0)
    .endAngle(perimiter);

var group = circleChartCanvas.append('g')
    .attr("transform", "translate("+ (width/2) +", "+ (height/2) +")");

group.append("path")
    .attr("d", arc)
    .attr("fill", "#E12E00");