setTimeout(showPage, 500);

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainDiv").style.display = "block";
}

function displayC() {
  var refresh = 1000;
  myTime=setTimeout('displayDate()', refresh)
}

function displayDate() {
  var x = new Date();
  var x1=x.toUTCString;
  document.getElementById('date').innerHTML = x1;
  tt=displayC();
}
