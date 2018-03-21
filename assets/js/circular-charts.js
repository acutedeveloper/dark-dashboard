

function drawCircleChart(color) {
    var circleChartData = {
        price: "£310,394,685",
        campaigns: 12,
        percentage: 50
    }

    width = parseInt(d3.select('.circularchart__graph').style('width'), 10);
    height = 250;

    var circleChartCanvas = d3.selectAll(".circularchart__graph--" + color)
        .append("svg")
        .attr("height", height)
        .attr("width", width);

    circleChartCanvas.append("text")
        .text(circleChartData.price)
        .attr('x', width/2)
        .attr('y', height/2 - 15)
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .attr('class', 'size-h1')
        .attr('fill', '#FFF');

    circleChartCanvas.append("text")
        .text("Using " + circleChartData.campaigns + " Campaigns")
        .attr('x', width/2)
        .attr('y', height/2 + 5)
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'hanging')
        .attr('class', 'size-p')
        .attr('fill', 'rgba(255,255,255, 0.5)');

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
        // We multiply the %amount by the perimiter
        .endAngle(0.65 * perimiter);

    var arcMarker = d3.arc()
        .innerRadius(donutRadius() - 15)
        .outerRadius(donutRadius() - 10)
        .startAngle(0.645 * perimiter)
        // We multiply the %amount by the perimiter
        .endAngle(0.65 * perimiter);

    var arcBackground = d3.arc()
        .innerRadius(donutRadius() - 15)
        .outerRadius(donutRadius() - 10)
        .startAngle(0)
        .endAngle(1  * perimiter);

    var group = circleChartCanvas.append('g')
        .attr("transform", "translate("+ (width/2) +", "+ (height/2) +")");

    group.append("path")
        .attr("d", arcBackground)
        .attr('fill', 'rgba(255,255,255, 0.10)');

    group.append("path")
        .attr("d", arc)
        .attr("class", "areachart__fill--" + color);

    group.append("path")
        .attr("d", arcMarker)
        .attr('fill', '#FFF');
}

drawCircleChart("red");
drawCircleChart("blue");