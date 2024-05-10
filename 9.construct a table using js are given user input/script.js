


function createTable() {
    var rows = document.getElementById("rows").value;
    var cols = document.getElementById("cols").value;
    
    var table = "<table>";
    // table += "<thead><tr>";
    for (var i = 0; i < cols; i++) {
        table += "<th>Heading " + (i+1) + "</th>";
    }
    // table += "</tr></thead>";
    table += "<tbody>";
    for (var i = 0; i < rows; i++) {
        table += "<tr>";
        for (var j = 0; j < cols; j++) {
            // table += "<td>position " + (i+1) + ", " + (j+1) + "</td>";
            table += "<td>Content " +   "</td>";
        }
        table += "</tr>";
    }
    table += "</tbody></table>";

    document.getElementById("table-container").innerHTML = table;
}