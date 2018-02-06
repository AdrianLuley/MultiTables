function DisplayTable() {

  var startCol = parseInt(document.getElementById("startCol").value);
  var endCol = parseInt(document.getElementById("endCol").value);
  var startRow = parseInt(document.getElementById("startRow").value);
  var endRow = parseInt(document.getElementById("endRow").value);


 
  var htmlBuffer = "<table border='1'>";

  for (var i = startRow; i <= endRow; i++) {
  
    htmlBuffer += "<tr>";

    for (var j = startCol; j <= endCol; j++) {
      /* add a table cell with the multiplication inside it to the buffer */
      console.log(i + " x " + j + " = " + (i * j));
      htmlBuffer += "<td>" + (i * j) + "</td>";
    }

    /* add a closing table row tag to the buffer */
    htmlBuffer += "</tr>";
  }

  /* add a closing table tag to the buffer */
  htmlBuffer += "</table>";

  /* print/put generated html code inside the DIV element */
  document.getElementById("multiTable").innerHTML= htmlBuffer;


}
