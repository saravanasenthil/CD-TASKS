


function createTable() {
    var rows = document.getElementById("rows").value;
    var cols = document.getElementById("cols").value;
    
    var table = "<table>";
    
    for (var i = 0; i < cols; i++) {
        table += "<th>Heading " + (i+1) + "</th>";
        
    }
   
    table += "<tbody>";
    for (var i = 0; i < rows; i++) {
        table += "<tr>";
        for (var j = 0; j < cols; j++) {
            
            table += "<td>Content " +   "</td>";
        }
        table += "</tr>";
    }
    table += "</tbody></table>";

    document.getElementById("table-container").innerHTML = table;
}