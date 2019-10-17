setTimeout(showPage, 500);

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainDiv").style.display = "block";
}

var m = "Last updated on " + document.lastModified;
var p = m.length-8;
document.getElementById("lastUpdated").innerHTML = m.substring(p, 0);
