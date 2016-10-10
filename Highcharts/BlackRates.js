function rateOthers() {
    $.getJSON("../Rdata.json", function (data) {
        var yearGroup = _.groupBy(data, "Year")
        var offenderRaces = _.allKeys(_.groupBy(data, "Offender.Category"));
        var victimRaces = _.allKeys(_.groupBy(data, "Victim.Category"));
        var series = _.map(yearGroup, function (value, key) {
            var a = _.each(offenderRaces, function (offRace) {
                var b = _.each(victimRaces, function (vicRace) {
                    var m = _.map(value, function (v, k) {
                        var need = _.where(value, {
                            "Offender.Category": offRace,
                            "Victim.Category": vicRace
                        });
                    });
//                    alert(JSON.stringify(m, null, 2))


                });
            });
        });
//        alert(JSON.stringify(series, null, 2))


        var chartOptions = {
            title: {
                text: 'Yearly Rate where the Victim and Offender are of the same Race',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: FBI.gov',
                x: -20
            },
            xAxis: {
                categories: _.allKeys(yearGroup)
            },
            yAxis: {
                title: {
                    text: 'percent %'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                                }]
            },
            tooltip: {
                valuePrefix: 'Accounts for ',
                valueSuffix: '%'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            }
            //            series: series
        };
        $('#container1').highcharts(chartOptions);
    });
};