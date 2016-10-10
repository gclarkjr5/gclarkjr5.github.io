function rateRaceAsVictim() {
    $.getJSON("../Rdata.json", function (data) {
        var yearGroup = _.groupBy(data, "Year")
        var races = _.allKeys(_.groupBy(data, "Offender.Category"));
        var series = _.map(races, function (race) {
            var sameGrp_yr = _.map(yearGroup, function (value, key) {
                var sameGrp = _.where(value, {
                    "Offender.Category": race,
                    "Victim.Category": race
                });
                return sameGrp
                    //                alert(JSON.stringify(c, null, 2))
            });
            return {
                "name": race + " % of Homicide Victims",
                "data": _.map(_.flatten(sameGrp_yr), function (x) {
                    return x.percent_as_victim
                }),
                "type": "spline"
            }
        });


        var chartOptions = {
            title: {
                text: 'Yearly Rate where that Race was the Victim of Homicide (regardless of the Offender Race)',
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
            },
            series: series
        };
        $('#container').highcharts(chartOptions);
    });
};