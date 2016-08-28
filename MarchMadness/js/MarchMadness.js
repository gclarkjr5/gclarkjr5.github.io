
var app = angular.module('myApp', []);


app.controller('dataCtrl', function($scope){	
	
Papa.parse("NCAA trial.csv", {
download: true,
header: true,
dynamicTyping: true,
complete: function (results, file) {
	console.log(results);
	
		$scope.data = results.data;
  

var title = "NCAA Men's Basketball Tournament";
var data = [];
var keys = Object.keys($scope.data[0]);

CanvasJS.addColorSet("modern",
                [
				"#404040",
				"#606060",
				"#808080",
                "#b0b0b0",
				"#e0e0e0",
				"#cc9900",
				"#4d3900"
                ]);


for(var i=5; i < 12; i++){
	var round = keys[i];
	var type = "stackedBar";
	var legend = true;
	var dataPoints = [];

	for(name in $scope.data){
		var y = $scope.data[name][round];
		var label = $scope.data[name].Progressive;
		
		var finalFour = $scope.data[name]["Final Four"];
		var topTwo = $scope.data[name].Championship;
		var winner = $scope.data[name].Winner;
		var max = $scope.data[name].Max;
		var count = $scope.data[name].Count;
		var total = $scope.data[name].Total;
		
		dataPoints.push(
			{
			label: label,
			y: y,
			finalFour: finalFour,
			topTwo: topTwo,
			winner: winner,
			count: count,
			total: total
			}
		)
	}
	
	data.push(
		{
			showInLegend: legend,
			name: round,
			type: type,
			dataPoints: dataPoints
		}
	)
}

data[6]['fillOpacity'] = 0.6;


function compareDataPointYAscend(dataPoint1, dataPoint2) {
		return dataPoint1.total - dataPoint2.total;
}

var chart = new CanvasJS.Chart("chartContainer", {
	theme: "theme2",
	colorSet: "modern",
	height: 850,
	backgroundColor: "transparent",
	title: {
		text: title,
		fontColor: "#505050",
		fontSize: 30
	},
	subtitles: [
	{
		text: "March Madness 2016"
	}
	],
	legend: {
		fontSize: 20,
		horizontalAlign: "center",
		verticalAlign: "top",
		fontColor: "#909090"
	},
	toolTip: {
	  content: "<b>{label} <br/> {name}: {y} Points</b> <br/> Final Four: {finalFour} <br/> Top 2: {topTwo} <br/> Champion: {winner} <br/> Games Correct: {count} <br/> Total Pts: {total}"
	},
	axisX: {
		labelFontSize: 12,
		labelFontStyle: 'italic',
		interval: 1
	},
	axisY: {
		title: "Points",
		titleFontSize: 25,
		labelFontSize: 20
	},
	animationEnabled: true,
	data: data
});
for(var i=0; i < data.length; i++){
	chart.options.data[i].dataPoints.sort(compareDataPointYAscend);
}
chart.render();
	
	
	
	
	
}});
	
	
	

});

