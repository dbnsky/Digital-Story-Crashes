

d3.csv("/story/data/data-crashes.csv", function(flights) {

    //console.log(flights[0]);

    flights.forEach(function(d) {
        d.Fatalities = +d.Fatalities;
        d.Engines = +d.Engines;
    });

    /*let flight = crossfilter(flights),
        all = flight.groupAll,
        date = flight.dimension(function(d) {
            return d.date;
        }),
        dates = date.group(d3.time.day),
        


    let charts = [
        
        barChart()
            .dimension(date)
            .group(dates)
            .round(d3.time.day.round)
            .x(d3.time.scale()
                .domain([new Date(what, what, what), new Date(what, what, what)])
                .rangeRound([0, what * what]))
                .filter([]),
    
        barChart() 
            .dimension(fatality)
            .group(fatalities)
            .x(d3.scale.linear()
                .domain([what, what])
                .rangeRound([what, what])),
    
        barChart()
            .dimension(phase)
            .group(phases)
            .x(d3.scale.linear()
                .domain([what, what])
                .rangeRound([what, what]))
    ];*/
}); 