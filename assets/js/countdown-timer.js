function updateCountdownTime() {
	now = new Date();
	start_PB = Date.parse("November 9, 2009 10:30:10");
	end_PB = Date.parse("November 10, 2019 11:30:10");

	diff_start = start_PB - now;
	diff_end = end_PB - now;

	if (diff_start < 0 && diff_end > 0){
		document.getElementById("countdown-timer").hidden = true;
		document.getElementById("countdown-timer-completed").hidden = false;
		document.getElementById("countdown-timer-completed").innerHTML = "PointBlanc is happening <b style=\"font-size: 0.9em;\">right now</b>. ─=≡Σ(╯°□°)╯︵┻┻ ";
	} else if (diff_start < 0 && diff_end < 0){
		document.getElementById("countdown-timer").hidden = true;
		document.getElementById("countdown-timer-completed").hidden = false;
		document.getElementById("countdown-timer-completed").innerHTML = "PointBlanc is done. (٥↼_↼)";
	} else{
		days = Math.floor( diff_start / (1000*60*60*24) );
		hours = Math.floor( diff_start / (1000*60*60) );
		mins = Math.floor( diff_start / (1000*60) );
		secs = Math.floor( diff_start / 1000 );

		dd = days;
		hh = hours - days * 24;
		mm = mins - hours * 60;
		ss = secs - mins * 60;

		document.getElementById("countdown-timer-days").innerHTML = dd;
		document.getElementById("countdown-timer-hours").innerHTML = hh;
		document.getElementById("countdown-timer-minutes").innerHTML = mm;
		document.getElementById("countdown-timer-seconds").innerHTML = ss;
	}
}
setInterval('updateCountdownTime()', 1000);