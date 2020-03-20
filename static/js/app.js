// access the index.html table
var table = d3.select("#ufo-table");
var tbody = table.select("tbody");
// build table
trow = tbody.append("tr");
for (var j = 0; j < data.length; j++) {
    trow.append("td").text(data[j].datetime)
    trow.append("td").text(data[j].city)
    trow.append("td").text(data[j].state)
    trow.append("td").text(data[j].country)
    trow.append("td").text(data[j].shape)
    trow.append("td").text(data[j].durationMinutes)
    trow.append("td").text(data[j].comments)
};
// grabing the id for button
var submission = d3.select("#filter-btn")

// function for pressing button on click
submission.on("click", function (){
    // prevent default function
    d3.event.preventDefault();
    var date = d3.select("#datetime");
    // take the value of input
    var dateEntry = date.property("value");
    // filter by entry
    var entryTable = data.filter(date => date.datetime === dateEntry);
    tbody.selectAll("tr").remove()
    // loop through new table and append results
    for (var j = 0; j < entryTable.length; j++) {
        trow = tbody.append("tr");
        trow.append("td").text(entryTable[j].datetime);
        trow.append("td").text(entryTable[j].city);
        trow.append("td").text(entryTable[j].state);
        trow.append("td").text(entryTable[j].country);
        trow.append("td").text(entryTable[j].shape);
        trow.append("td").text(entryTable[j].durationMinutes);
        trow.append("td").text(entryTable[j].comments);
    }
});
