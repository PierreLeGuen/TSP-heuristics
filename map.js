function createCities(mapWidth, mapHeight, nbCities) {
    let cities = []
    for (let index = 0; index < nbCities; index++) {
        let x = randomInt(mapWidth)
        let y = randomInt(mapHeight)
        cities[index] = [x, y];
    }
    return cities
}

function drawMap(canvas, cities, nbCities) {
    let canvas_ctx = canvas.getContext("2d");
	canvas_ctx.clearRect(0,0, canvas.width, canvas.height);
	console.log(canvas.width)
	// Cities
	for(var i=0; i<nbCities; i++)
	{
		canvas_ctx.beginPath();

		canvas_ctx.arc(cities[i][0], cities[i][1], 4, 0, 2*Math.PI);
		canvas_ctx.fillStyle = "#0000ff";
		canvas_ctx.strokeStyle = "#000";
		canvas_ctx.closePath();
        canvas_ctx.fill();
		canvas_ctx.lineWidth=1;
		canvas_ctx.stroke();
	}
	canvas_ctx.closePath();
}