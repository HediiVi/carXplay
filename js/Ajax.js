function map1() {
	"use strict";
	loadScript(
			'./js/map.js',
			function(path, status) {
				L.mapbox.accessToken = 'pk.eyJ1IjoiYmhrIiwiYSI6ImNpZnp1bDQ0eTAyejZ0a20wZzNkbmdiamkifQ.yEKk0o9wta9hZSl_Jc5wcA';
				if (document.getElementById("map") != null) {
					document.getElementById("map").remove();
				}
				document.getElementById(content).innerHTML = "<div id='map'>"
						+ retour + "</div>";
			});
	CurrentPage=1;
	watchFunc();
	isMapEnter = 1;
}