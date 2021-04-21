// create a simpleheat object given an id or canvas reference
var heat = simpleheat(canvas);

// set data of [[x, y, value], ...] format
heat.data(data);

// set max data value (1 by default)
heat.max(max);

// add a data point
heat.add(point);

// clear data
heat.clear();

// set point radius and blur radius (25 and 15 by default)
heat.radius(r, r2);

// set gradient colors as {<stop>: '<color>'}, e.g. {0.4: 'blue', 0.65: 'lime', 1: 'red'}
heat.gradient(grad);

// call in case Canvas size changed
heat.resize();

// draw the heatmap with optional minimum point opacity (0.05 by default)
heat.draw(minOpacity);
