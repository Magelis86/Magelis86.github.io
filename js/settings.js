
"use strict";

/**
 * Game settings.
 */
Game.settings = {
	// volume [0, 1]
	"MUSIC": 0.6,
	"SOUND": 0.8,

	// frame rate
	"FPS": 30,

	// RANDOM, OFFENSIVE, DEFENSIVE, BALANCED
	"AI_PLAYER": "BALANCED",
	"AI_OPPONENT": "BALANCED"
};

/**
 * Game rules.
 */
Game.rules = {
	"OPEN": false,
	"SAME": true,
	"SAME_WALL": true,
	"PLUS": true,
	"COMBO": true,
	"ELEMENTAL": true,
	"SUDDEN_DEATH": true
};

/**
 * Updates game rules in popup display.
 */
Game.updateRuleDisplay = function() {
	// add game rules to popup
	var str = "";
	for (var rule in Game.rules) {
		// format rule for display
		var display = rule.toLowerCase();
		display = display.replace("_", " ");
		display = display.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
		display = "<strong>" + display + "</strong>: <span style=color:";
		display = display + ((Game.rules[rule] === true) ? "#0055FF>ON" : "#FF0000>OFF") + "</span>";
		display = "<span onclick=Game.toggleRule('" + rule + "')>" + display + "</span><br />";

		str += display;
	}
	document.getElementById("rules_popup").innerHTML = str;
}

/**
 * Toggles a rule.
 */
Game.toggleRule = function(rule) {
	Game.rules[rule] = !Game.rules[rule];
	Game.updateRuleDisplay();
}