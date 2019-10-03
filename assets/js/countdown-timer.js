function updateCountdownTime() {
	now = new Date();
	kickoff = Date.parse("November 9, 2019 10:30:10");

	diff = kickoff - now;

	if (diff < 0){
		document.getElementById("countdown-timer").hidden = true;
		document.getElementById("countdown-timer-completed").hidden = false;
	}
	else {
		days = Math.floor( diff / (1000*60*60*24) );
		hours = Math.floor( diff / (1000*60*60) );
		mins = Math.floor( diff / (1000*60) );
		secs = Math.floor( diff / 1000 );

		dd = days;
		hh = hours - days * 24;
		mm = mins - hours * 60;
		ss = secs - mins * 60;

		document.getElementById("countdown-timer-days").innerHTML =
			dd;
		document.getElementById("countdown-timer-hours").innerHTML =
			hh;
		document.getElementById("countdown-timer-minutes").innerHTML =
			mm;
		document.getElementById("countdown-timer-seconds").innerHTML =
			ss;
		// document.getElementById("countdown-timer-completed").hidden = true;
		
	}

}
setInterval('updateCountdownTime()', 1000 );