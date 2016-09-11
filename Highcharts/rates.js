function rates() {
    $.getJSON("../Rdata.json", function (data) {
        var yearGroup = _.groupBy(data, "Year")
        var races = _.allKeys(_.groupBy(data, "Offender.Category"));
        var series = _.map(races, function (race) {
            var sameGrp_yr = _.map(yearGroup, function (value, key) {
                var sameVictim = _.groupBy(value, "Victim.Category")
                var sameVic = _.map(sameVictim, function(val, ky){
                    alert(JSON.stringify(val, null, 2)
                });
//                alert(JSON.stringify(sameVic, null, 2))
            });
//            alert(JSON.stringify(sameGrp_yr, null, 2))
            //        alert(JSON.stringify(data, null, 2))
        });
    });
};