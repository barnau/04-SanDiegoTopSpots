$.getJSON("mock/topspots.json", function(spots) {
	
	
	var html = '';
	spots.forEach(function(spot) {
		
		html += '<tr class="row"><td>' + spot.name + '</td><td>' + spot.description + '</td><td><input class="btn btn-block btn-primary" type="button" value="Link" onclick="self.location=\'https://www.google.com/maps?q=' 
		+ spot.location[0] + ", " + spot.location[1] + '\'"></button></td></tr>';
	});

	console.log(html);



	$("tbody").append(html);

	
});

