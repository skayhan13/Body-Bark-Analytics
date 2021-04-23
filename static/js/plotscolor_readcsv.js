d3.csv("resources/color_count_totals.csv", function(data) {
    var bbcolor = [];
    var yearsold = [];
    var total = [];

    for (var i = 0; i < data.length; i++) {
      bbcolor.push(data[i].color);
      yearsold.push(data[i].year);
      total.push(data[i].count_total);
      }  //end for loop

    // Create an array of each years numbers
    var y2014 = Object.values(yearsold=2014);
    var y2015= Object.values(yearsold=2015);
    var y2016 = Object.values(yearsold=2016);
    console.log(y2014)

    // Create an array of colors labels
    var labels = Object.keys(bbcolor);
}); //end d3
//     // Display the default plot
//     function init() {
//     var data = [{
//         values: y2014,
//         labels: labels,
//         type: "pie"
//     }];

//     var layout = {
//         height: 600,
//         width: 800
//     };

//     Plotly.newPlot("pie", data, layout);
//     }

//     // On change to the DOM, call getData()
//     d3.selectAll("#selDataset").on("change", getData);

//     // Function called by DOM changes
//     function getData() {
//     var dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     var dataset = dropdownMenu.property("value");
//     // Initialize an empty array for the color's data
//     var data = [];

//     if (dataset == 'y2014') {
//         data = y2014;
//     }
//     else if (dataset == 'y2015') {
//         data = y2015;
//     }
//     else if (dataset == 'y2016') {
//         data = y2016;
//     }
//     // Call function to update the chart
//     updatePlotly(data);
//     }

//     // Update the restyled plot's values
//     function updatePlotly(newdata) {
//     Plotly.restyle("pie", "values", [newdata]);
//     }
// }); //end d3
// init();
