let nbCities = 0

$(document).ready(function()
	{
		$("#go").click(function()
			{
                nbCities = parseInt($("#cities").val());
				init();
			});
	});


let canvas = document.getElementById('tsp-canvas');

function init() {
    cities = createCities(canvas.width, canvas.height, nbCities)
    drawMap(canvas, cities, nbCities)

}