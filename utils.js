function randomFloat(n)
{
	return (Math.random()*n);
}

function randomInt(n)
{
	return Math.floor(Math.random()*(n));
}

function randomInteger(a,b)
{
	return Math.floor(Math.random()*(b-a)+a);
}

function deep_copy(array, to)
{
	var i = array.length;
	while(i--)
	{
		to[i] = [array[i][0],array[i][1]];
	}
}

function getCost(route)
{
	var cost = 0;
	for(var i=0; i< CITIES-1;i++)
	{
		cost = cost + getDistance(route[i], route[i+1]);
	}
	cost = cost + getDistance(route[0],route[CITIES-1]);
	return cost;
}

function getDistance(p1, p2)
{
	del_x = p1[0] - p2[0];
	del_y = p1[1] - p2[1];
	return Math.sqrt((del_x*del_x) + (del_y*del_y));
}

function mutate2Opt(route, i, j)
{
	var neighbor = [];
	deep_copy(route, neighbor);
	while(i != j)
	{
		var t = neighbor[j];
		neighbor[j] = neighbor[i];
		neighbor[i] = t;

		i = (i+1) % CITIES;
		if (i == j)
			break;
		j = (j-1+CITIES) % CITIES;
	}
	return neighbor;
}