// from data.js
var tableData = data;

// // YOUR CODE HERE!
// Variables
var button = d3.select("#filter-btn");
var date = d3.select("#datetime");
var tbody = d3.select("tbody");

var populate = (tableData) => {
  tableData.forEach((UFO_sighting) => {
    var row = tbody.append("tr");
    Object.entries(UFO_sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
   });
 });
}

//Populate table
populate(tableData);

// Filter by attribute
button.on("click", () => {
  d3.event.preventDefault();
  var inputDate = date.property("value");
  var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
  console.log(filterDate)

  // Add filtered sighting to table
  tbody.html("");

  if (filterDate.length !== 0) {
    populate(filterDate);
  }

    else {
      tbody.append("tr").append("td").text("No results found!"); 
    }
})
