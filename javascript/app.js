$.getJSON("mock/topspots.json", function(spots) {
	
	
	var html = '';
	spots.forEach(function(spot) {
		console.log(spot);
		html += '<tr class="row"><td>' + spot.name + '</td><td>' + spot.description + '</td><td><a href="https://www.google.com/maps?q=' 
		+ spot.location[0] + ", " + spot.location[1] + '">Link</a></td></tr>';
	});

	$("tbody").append(html);

	
});