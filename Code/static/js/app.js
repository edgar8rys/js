// from data.js
var tableData = data;

// d3 to select the table from the html file
var tbody = d3.select('tbody');

function filterTable (data) {
    tbody.html("")
    // add a row for each object in the array and append
    data.forEach(function(sighting) {
        console.log(sighting);
        var row = tbody.append('tr');

        // object.entries to go through each  sighting
        Object.entries(sighting).forEach(function([key,value]){
            console.log(key, value);

            // append a cell for each value
            var cell = row.append('td');
            cell.text(value);
        });
    })};

// find button using the id
var button = d3.select('#filter-btn');

button.on('click', function(){
    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element from the html file.
    // grab the value the user puts in
    var inputElement = d3.select('#datetime');
    var inputValue = inputElement.property('value');

    console.log(inputElement);
    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);
    filterTable(filteredData)
});
