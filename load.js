setTimeout(showPage, 500);

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainDiv").style.display = "block";
}

function displayDate() {
  var x = new Date();
  var x1=x.toUTCString;
  document.getElementById('date').innerHTML = x1;
  tt=display_c();
}
