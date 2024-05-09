function toggleElement() {
    var element = document.getElementById("elementToToggle");
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
      Someelement.elementToToggle = "margin-left : 90px"
    }
  }
  