// //d3.csv("resources/barcharttesttake2.csv").then(function(colordata)
// //data = FileAttachment(“category-brands.csv”).csv({typed: true})
d3.csv("../resources/barcharttesttake2.csv").then(function(data){
    console.log(data);

    chart = {
        replay;
      
        const svg = d3.create("svg")
            .attr("viewBox", [0, 0, width, height]);
      
        const updateBars = bars(svg);
        const updateAxis = axis(svg);
        const updateLabels = labels(svg);
        const updateTicker = ticker(svg);
      
        yield svg.node();
      
        for (const keyframe of keyframes) {
          const transition = svg.transition()
              .duration(duration)
              .ease(d3.easeLinear);
      
          // Extract the top bar’s value.
          x.domain([0, keyframe[1][0].value]);
      
          updateAxis(keyframe, transition);
          updateBars(keyframe, transition);
          updateLabels(keyframe, transition);
          updateTicker(keyframe, transition);
      
          invalidation.then(() => svg.interrupt());
          await transition.end();
        }
      }

}) //end of d3 call




// //adding a . infront of chart to make it a class (not original code)
// chart = {
// //    replay;   //changed ; to ,
  
//  //   const svg = d3.create("svg")  
//  //       .attr("viewBox", [0, 0, width, height]);
//     var svg = d3
//     .select("body")
//     .append("svg")
//     .attr("height", 100)
//     .attr("width", 100); 

//     const updateBars = bars(svg);
//     const updateAxis = axis(svg);
//     const updateLabels = labels(svg);
//     const updateTicker = ticker(svg);
  
//     yield svg.node();
  
//     for (const keyframe of keyframes) {
//       const transition = svg.transition()
//           .duration(duration)
//           .ease(d3.easeLinear);
  
//       // Extract the top bar’s value.
//       x.domain([0, keyframe[1][0].value]);
  
//       updateAxis(keyframe, transition);
//       updateBars(keyframe, transition);
//       updateLabels(keyframe, transition);
//       updateTicker(keyframe, transition);
  
//       invalidation.then(() => svg.interrupt());
//       await transition.end();
//     }
//   }

//   duration = 250
//   n = 12
//   names = new Set(data.map(d => d.name))

//   datevalues = Array.from(d3.rollup(data, ([d]) => d.value, d => +d.date, d => d.name))
//   .map(([date, data]) => [new Date(date), data])
//   .sort(([a], [b]) => d3.ascending(a, b))

//   function rank(value) {
//     const data = Array.from(names, name => ({name, value: value(name)}));
//     data.sort((a, b) => d3.descending(a.value, b.value));
//     for (let i = 0; i < data.length; ++i) data[i].rank = Math.min(n, i);
//     return data;
//   }

//   k = 10


// keyframes = {
//   const keyframes = [];
//   let ka, a, kb, b;
//   for ([[ka, a], [kb, b]] of d3.pairs(datevalues)) {
//     for (let i = 0; i < k; ++i) {
//       const t = i / k;
//       keyframes.push([
//         new Date(ka * (1 - t) + kb * t),
//         rank(name => (a.get(name) || 0) * (1 - t) + (b.get(name) || 0) * t)
//       ]);
//     }
//   }
//   keyframes.push([new Date(kb), rank(name => b.get(name) || 0)]);
//   return keyframes;
// }

// nameframes = d3.groups(keyframes.flatMap(([, data]) => data), d => d.name)

// prev = new Map(nameframes.flatMap(([, data]) => d3.pairs(data, (a, b) => [b, a])))

// next = new Map(nameframes.flatMap(([, data]) => d3.pairs(data)))

// // bars = ƒ(svg)
// function bars(svg) {
//     let bar = svg.append("g")
//         .attr("fill-opacity", 0.6)
//       .selectAll("rect");
  
//     return ([date, data], transition) => bar = bar
//       .data(data.slice(0, n), d => d.name)
//       .join(
//         enter => enter.append("rect")
//           .attr("fill", color)
//           .attr("height", y.bandwidth())
//           .attr("x", x(0))
//           .attr("y", d => y((prev.get(d) || d).rank))
//           .attr("width", d => x((prev.get(d) || d).value) - x(0)),
//         update => update,
//         exit => exit.transition(transition).remove()
//           .attr("y", d => y((next.get(d) || d).rank))
//           .attr("width", d => x((next.get(d) || d).value) - x(0))
//       )
//       .call(bar => bar.transition(transition)
//         .attr("y", d => y(d.rank))
//         .attr("width", d => x(d.value) - x(0)));
//   }

//   //textTween = ƒ(a, b)
//   function textTween(a, b) {
//     const i = d3.interpolateNumber(a, b);
//     return function(t) {
//       this.textContent = formatNumber(i(t));
//     };
//   }

//   //formatNumber = ƒ(t)
//   formatNumber = d3.format(",d")


//   //tickFormat = undefined
//   tickFormat = undefined // override as desired
// //  axis = ƒ(svg)
// function axis(svg) {
//     const g = svg.append("g")
//         .attr("transform", `translate(0,${margin.top})`);
  
//     const axis = d3.axisTop(x)
//         .ticks(width / 160, tickFormat)
//         .tickSizeOuter(0)
//         .tickSizeInner(-barSize * (n + y.padding()));
  
//     return (_, transition) => {
//       g.transition(transition).call(axis);
//       g.select(".tick:first-of-type text").remove();
//       g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "white");
//       g.select(".domain").remove();
//     };
//   }
//   //ticker = ƒ(svg)
//   function ticker(svg) {
//     const now = svg.append("text")
//         .style("font", `bold ${barSize}px var(--sans-serif)`)
//         .style("font-variant-numeric", "tabular-nums")
//         .attr("text-anchor", "end")
//         .attr("x", width - 6)
//         .attr("y", margin.top + barSize * (n - 0.45))
//         .attr("dy", "0.32em")
//         .text(formatDate(keyframes[0][0]));
  
//     return ([date], transition) => {
//       transition.end().then(() => now.text(formatDate(date)));
//     };
//   }

// //formatDate = ƒ(e)
// formatDate = d3.utcFormat("%Y")

// //color = ƒ(d)
// color = {
//     const scale = d3.scaleOrdinal(d3.schemeTableau10);
//     if (data.some(d => d.category !== undefined)) {
//       const categoryByName = new Map(data.map(d => [d.name, d.category]))
//       scale.domain(categoryByName.values());
//       return d => scale(categoryByName.get(d.name));
//     }
//     return d => scale(d.name);
//   }

// //  x = ƒ(n)
// x = d3.scaleLinear([0, 1], [margin.left, width - margin.right])
// //y = ƒ(i)
// y = d3.scaleBand()
//     .domain(d3.range(n + 1))
//     .rangeRound([margin.top, margin.top + barSize * (n + 1 + 0.1)])
//     .padding(0.1)
// //height = 598
// height = margin.top + barSize * n + margin.bottom
// //barSize = 48
// barSize = 48

// //margin = Object {top: 16, right: 6, bottom: 6, left: 0}
// margin = ({top: 16, right: 6, bottom: 6, left: 0})
// //d3 = Object {format: ƒ(t), formatPrefix: ƒ(t, n), timeFormat: ƒ(t), timeParse: ƒ(t), utcFormat: ƒ(t), utcParse: ƒ(t), Adder: class, Delaunay: class, FormatSpecifier: ƒ(t), Int
// d3 = require("d3@6")








