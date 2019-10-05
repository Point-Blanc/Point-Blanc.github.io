function saySomethingRandom(){
	var random_quotes = [
		"In the Garden grows a tree of silver wings. The leaves are ruins, \
		the bark disaster. Of the seeds we do not speak.",
		"In that last moment, she seemed as wholly luminescent as the Sun, \
		and I wished to be so brave.",
		"The Light lives in all places, in all things. You can block it or \
		even try to trap it. But the Light always finds it's way.",
		"Two possibilities exist: either we are alone in the Universe or we \
		are not. Both are equally terrifying",
		"The purposeful destruction of information is the essence of \
		intelligent work.",
		"One cubic inch of nanotube circuitry, once fully developed, would \
		be up to one hundred million times more powerful than the human \
		brain.",
		"By the end of this decade, computers will disappear as distinct \
		physical objects, with displays built in our eyeglasses, and \
		electronics woven in our clothing, providing full-immersion visual \
		virtual reality.",
		"What is better? To be born good or to overcome your evil nature \
		through great effort?",
		"Stand in the ashes of a trillion dead souls, and asks the ghosts \
		if honor matters. The silence is your answer.",
		"If our lives are already written, it would take a courageous man \
		to change the script.",
		"Batman: You want to know something funny? Even after everything \
		you've done, I would have saved you.<br>The Joker: [laughs, coughs] \
		Actually that is pretty funny.",
		"All worlds begin in darkness, and all so end. The heart is no \
		different. Darkness sprouts within it. It grows, consumes it. Such \
		is its nature. In the end, all hearts return to the darkness whence \
		it came. You see, darkness is the heart’s true essence.",
		"We stand upon the precipice of change. The world fears the inevitable\
		plummet into the abyss. Watch for that moment… and when it comes, do\
		not hesitate to leap. It is only when you fall that you learn whether\
		you can fly.",
		"The flow of time is always cruel, its speed seems different for each \
		person, but no one can change it. A thing that does not change with \
		time is a memory of younger days.",
		"Fighting was the only thing I was ever good at, but at least I always\
		fought for what I believed in.",
	];
	var item = random_quotes[Math.floor(Math.random() * random_quotes.length)];
	document.getElementById("footer-random-saying").innerHTML = item;
}
