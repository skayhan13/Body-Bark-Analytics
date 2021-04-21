//function init(){
  // d3.json("../../samples.json").then((data)=>
  //   d3.json("samples.json").then((data)=>

  d3.csv("resources/size_count.csv", function(data) {
    var sizes = [];
    var sizes_sold = [];
    for (var i = 0; i < data.length; i++) {
      sizes.push(data[i].product_size);
      sizes_sold.push(data[i].countofsize);
      }  //end for loop
   
    var trace = [{
      type: 'bar',
      x: sizes,
      y: sizes_sold,
     // orientation: 'h',
      text: sizes
    }];
              
    Plotly.newPlot('bar', trace);
    //console.log(sizes);
    //console.log(sizes_sold);

    });
 
 
   //creates elements for dropdown menu
    //  var select = document.getElementById("selDataset"); 
    //    for(var i = 0; i < names.length; i++) {
    //    var opt = names[i];
    //    var el = document.createElement("option");
    //    el.textContent = opt;
    //    el.value = opt;
    //    select.appendChild(el);
    //    }
    //  buildgraph(names[0]);
 

 //} //closes init function

 // 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
 // Use the first sample from the list to build the initial plots
 
//  function buildgraph(selectedid){
//  //  d3.json("../../samples.json").then((data)=>{
//    d3.json("samples.json").then((data)=>{
  
 
//      var otuidarray = data.samples.filter(eachelement=>eachelement.id===selectedid);
//      var selected_person=otuidarray[0];
//      var otuid=selected_person["otu_ids"]; 
//      var sample_otu_id=otuid.map(oneElement=>`OTU ID ${oneElement.toString()}`); 
//      //console.log(sample_otu_id);
//      var string_otu_id=sample_otu_id.slice(0, 10).reverse();
     
//      console.log(`string otu_id`, string_otu_id);
//      var sampleV = selected_person["sample_values"].slice(0, 10).reverse();   
//      console.log(`string sampleV`, sampleV);
//      var otuLl =selected_person["otu_labels"].slice(0, 10).reverse();  //console.log(otuLl);
//      console.log(`otuL1`, otuLl);
//      var trace = [{
//          type: 'bar',
//          x: sampleV,
//          y: string_otu_id,
//          orientation: 'h',
//          text: otuLl
//        }];
 
                 
//        Plotly.newPlot('bar', trace);
 
//        var trace2 = {
//          type: 'bubble',
//          x: otuid,
//          y: sampleV,
//          text: otuLl,
//          mode: 'markers',
//          marker: {
//            color: otuid,
//            colorscale: [[0, 'rgb(0, 50, 75'], [1, 'rgb(76, 100, 250']],
//            size: sampleV
//          }
//        };
       
//        var layout = {
//          title: 'Samples',
//          showlegend: false,
//          height: 500,
//          width: 1000,
//          xaxis: {title: {text: 'OTU ID'}}
//        };
//        Plotly.newPlot('bubble', [trace2], layout);
 
//  // demographic data
//        var demo_row = d3.select("#sample-metadata");
//        demo_row.html("");
//        var metadata1=data.metadata;
//        console.log(metadata1)
//        var metadata_array=metadata1.filter(each_element=>each_element.id==selectedid);
//        var selected_metadata=metadata_array[0];
//        console.log(selected_metadata);
     
      
//        Object.entries(selected_metadata).forEach(([key, val]) => {
//        let demotable = demo_row.append("div");
//        demotable.text(`${key}: ${val}`);
//            }
//          );
 
//    }) //end of d3 then statement
//  } //end of build graph function
//init();