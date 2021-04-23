// Create an array of each years numbers
var y2014 = Object.values(data.y2014);
var y2015= Object.values(data.y2015);
var y2016 = Object.values(data.y2016);
console.log(y2014)

// Create an array of colors labels
var labels = Object.keys(data.y2014);

// Display the default plot
function init() {
  var data = [{
    values: y2014,
    labels: labels,
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the color's data
  var data = [];

  if (dataset == 'y2014') {
      data = y2014;
  }
  else if (dataset == 'y2015') {
      data = y2015;
  }
  else if (dataset == 'y2016') {
      data = y2016;
  }
  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();
