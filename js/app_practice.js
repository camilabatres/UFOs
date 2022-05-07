//import teh data from data.js
const tableData = data;
// Reference the HTML table using d3 (produces highly dynamic graphics in HTML)
var tbody = d3.select("tbody");
 
// BUILD A FUNCTION TABLE 
function buildTable(data) {
    tbody.html(""); //create a blank canvas (clear data)
  
// this function = for loop data
// databeingimported.keywordtocreateforloop(parameter)
// (dataRow) will represent each row of the data
data.forEach((dataRow) => {
    let row = tbody.append("tr"); 
//using let bc this variable is limited to just this block of code
// find the <tbody> tag within the HTML and add a table row ("tr")
    
// Loop through each field in the dataRow and add
// each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
//reference one object from the array of UFO sightings
//by adding (dataRow) as the argument, we want the value to go into the dataRow
// foreach(val) specify that we want one object per row
        let cell = row.append("td");
    // append each value of the object ato a cell in the table
        cell.text(val);
    //set up action of appending data into a table data 
        }
      );
    });
  }
//WITH THIS FUNCTION WE ACCOMPLISHED:
// Looped through each object in the array
// Appended a row to the HTML table
// Added each value from the object into a cell

//FILTER TABLE 
function handleClick() {

    let date = d3.select("#datetime").property("value");
// the select() is common. selects the 1st element that matches our selection string #datetime
//D3 to look for the #datetime id in the HTML tags
    let filteredData = tableData;
// set default filter and save it to a new variable 
//filteredData variable to our raw data, using it as blank slate

// applying a filter method that will match the datetime value to the filtered date value 
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
}

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);