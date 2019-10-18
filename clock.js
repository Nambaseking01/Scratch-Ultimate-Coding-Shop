/*Keep the comments, we are trying to fix a bug*/ 

function updateClock {
  var now = new Date(), 
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
  
  date = [now.getDate(),
          months[now.getMonth()],
          now.getFullYear()].join(' ');
  
  document.getElementById('time').innerHTML = [date, time].join('/');
  
  setTimeout(updateClock, 1000);
}
