function update_time () {
	var today = new Date();
	// var time = today.getHours() + ":" + today.getMinutes();
	// let time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const monthNames = ["January", "February", "March", "April", "May", "June",
	  "July", "August", "September", "October", "November", "December"];
	var time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
	var dayName = days[today.getDay()];
	var monthName = monthNames[today.getMonth()]
	time_element = document.getElementById("time");
	day_element = document.getElementById("day");
	date_element = document.getElementById("date")
	var time_only = time.slice(0,-2);
	time_element.innerHTML = time_only; 
	day_element.innerHTML = dayName;
	// date_element.innerHTML = monthName + " "+ today.getDate();
	date_element.innerHTML = monthName + " "+ "<span class='red-font'>"+ today.getDate() +"</span>";

}
update_time();
var elem = document.getElementById("fullscreen")
var body = window.document;
var bodyel = body.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    bodyel.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    bodyel.requestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    bodyel.requestFullscreen();
  }
  elem.remove()
}
setInterval(update_time, 30000);

